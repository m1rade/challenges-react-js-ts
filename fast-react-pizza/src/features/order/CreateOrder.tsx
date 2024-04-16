import type { ActionFunctionArgs } from 'react-router-dom';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { apiRestaurant } from '../../services/apiRestaurant';
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
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const actionData = useActionData() as Awaited<ReturnType<typeof action>>;
  const errors = actionData && isErrorField(actionData) ? actionData : null;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>
      <Form method="POST">
        <div>
          <label htmlFor="customer">First Name</label>
          <input id="name" name="customer" type="text" required />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" required />
          {errors && errors.field === 'phone' && <div>{errors.message}</div>}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input id="address" name="address" type="text" required />
        </div>
        <div>
          <input id="priority" name="priority" type="checkbox" />
          <label htmlFor="priority">Want to you give your order priority?</label>
        </div>
        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Ordering...' : 'Order'}
          </button>
        </div>
      </Form>
    </div>
  );
}

CreateOrder.action = action;
