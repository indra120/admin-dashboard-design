import { Order } from './order'

export function RecentOrders() {
  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Number</th>
            <th>Payment</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => <Order key={order.number} {...order} />)}
        </tbody>
      </table>
      <a href="#">Show All</a>
    </div>
  )
}

const orders = [
  {
    name: 'JavaScript Tutorial',
    number: '85743',
    paymentStatus: 'Due',
    status: 'Pending',
  },
  {
    name: 'CSS Full Course',
    number: '97245',
    paymentStatus: 'Refunded',
    status: 'Declined',
  },
  {
    name: 'Flex-Box Tutorial',
    number: '36452',
    paymentStatus: 'Paid',
    status: 'Active',
  },
]
