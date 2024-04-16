import type { LoaderFunctionArgs, ParamParseKey, Params } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import type { Paths } from '../../routes/paths';
import { apiRestaurant } from '../../services/apiRestaurant';
import { calcMinutesLeft, formatCurrency, formatDate } from '../../utils/helpers';

interface LoaderArgs extends LoaderFunctionArgs {
  params: Params<ParamParseKey<typeof Paths.orderDetails>>;
}

const loader = async ({ params }: LoaderArgs) => await apiRestaurant.getOrder(params.orderId ?? '');

export function Order() {
  const order = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const { estimatedDelivery, orderPrice, priority, priorityPrice, status } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Status</h2>

        <div>
          {priority && <span>Priority </span>}
          <span>{status} order</span>
        </div>
      </div>

      <div>
        <p>{deliveryIn >= 0 ? `Only ${deliveryIn} minutes left 😃` : 'Order should have arrived'}</p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

Order.loader = loader;
