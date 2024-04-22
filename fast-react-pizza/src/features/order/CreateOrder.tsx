import { useState } from 'react';
import type { ActionFunctionArgs } from 'react-router-dom';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { apiRestaurant } from '../../services/apiRestaurant';
import { Button } from '../../ui/Button';
import Input from '../../ui/Input';
import { isValidPhone } from '../../utils/validators';

// Order ids: GWD0UY 8QYJK3

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

interface OrderFormData {
  address: string;
  customer: string;
  phone: string;
  priority?: 'on';
  cart: string;
}

interface FieldError {
  field: string;
  message: string;
}

const action = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData()) as unknown as OrderFormData;

  if (!isValidPhone(data.phone)) {
    return { field: 'phone', message: 'Invalid phone number' } as FieldError;
  }

  const newOrder = await apiRestaurant.createOrder({
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'on',
  });

  return redirect(`/order/${newOrder.id}`);
};

function isErrorField(actionData: FieldError | Response): actionData is FieldError {
  return 'field' in actionData;
}

export function CreateOrder() {
  const cart = fakeCart;
  const username = useAppSelector(store => store.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const actionData = useActionData() as Awaited<ReturnType<typeof action>>;
  const errors = actionData && isErrorField(actionData) ? actionData : null;

  // const [customer, setCustomer] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [priority, setPriority] = useState(false);

  return (
    <div className="mx-3 mb-11 mt-4 md:mx-auto md:w-3/4 lg:w-1/2">
      <h2 className="mb-8 text-center text-2xl font-semibold">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div className="mb-8 flex flex-col justify-start gap-3 sm:flex-row sm:items-center lg:gap-0">
          <label
            htmlFor="customer"
            className="sm:basis-40">
            First Name
          </label>
          <div className="grow">
            <Input
              inputType="form"
              id="customer"
              name="customer"
              type="text"
              defaultValue={username}
              // onChange={e => setCustomer(e.currentTarget.value.trim())}
              required
            />
          </div>
        </div>
        <div className="mb-8 flex flex-col justify-start gap-3 sm:flex-row sm:items-center lg:gap-0">
          <label
            htmlFor="phone"
            className="sm:basis-40">
            Phone number
          </label>
          <div className="grow">
            <Input
              inputType="form"
              id="phone"
              name="phone"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.currentTarget.value.trim())}
              required
              error={!!errors}
            />
            {errors && errors.field === 'phone' && <p className="mt-2 font-bold text-red-500">{errors.message}</p>}
          </div>
        </div>
        <div className="mb-8 flex flex-col justify-start gap-3 sm:flex-row sm:items-center lg:gap-0">
          <label
            htmlFor="address"
            className="sm:basis-40">
            Address
          </label>
          <div className="grow">
            <Input
              inputType="form"
              id="address"
              name="address"
              type="text"
              onChange={e => setAddress(e.currentTarget.value.trim())}
              value={address}
              required
            />
          </div>
        </div>
        <div className="mb-8 flex items-center justify-start gap-5 lg:justify-end">
          <Input
            id="priority"
            name="priority"
            type="checkbox"
            inputType="checkbox"
            checked={priority}
            onChange={e => setPriority(e.currentTarget.checked)}
          />
          <label htmlFor="priority">Want to you give your order priority?</label>
        </div>
        <div>
          <input
            type="hidden"
            name="cart"
            value={JSON.stringify(cart)}
          />
          <div className="text-end">
            <Button
              type="submit"
              disabled={isSubmitting}>
              {isSubmitting ? 'Ordering...' : 'Order'}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

CreateOrder.action = action;
