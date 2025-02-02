import CommonLayout from '@/components/common/CommonLayout'
import React,{ReactElement} from 'react'

const Return = () => {
  return (
    <div className='p-5'>
    <h1>Shipping and Refund Policy</h1>

    <h2>Shipping</h2>
    <p>
      All orders will take 3-5 working days to be delivered, depending on the pin code. For all orders, delivery is free above Rs. 400.
    </p>
    <p>
      Items will be delivered by our riders or our courier partners. Once your order is shipped out, you will receive an email from Copper & Crumb along with the tracking details of your order.
    </p>

    <h2>Cancellation Policy</h2>
    <p>
      Cancellations for coffee orders will only be considered if the request is made within 24 hours of placing an order or before the order is roasted, whichever comes first.
    </p>

    <h2>Returns and Refund Policy</h2>
    <p>
      We are proud of the coffee we sell and hope that you like it as much as we do. However, if you are unsatisfied with any coffee purchase you have made from our website, simply contact us within 7 days of the shipment delivery date at <a href="mailto:roasters@copperandcrumb.com">roasters@copperandcrumb.com</a> for a replacement or 100% refund on the purchase price to your account.
    </p>
    <p>Please make sure to include:</p>
    <ul>
      <li>Your name and the date of purchase.</li>
      <li>The items you would like a refund on.</li>
      <li>The reason for the return.</li>
    </ul>

    <h3>Please Note:</h3>
    <ul>
      <li>
        All brewing equipment can only be refunded if it is returned to us in new and unused condition.
      </li>
      <li>
        Refunds for coffee subscription purchases will be on a prorated basis, depending on the number of shipments remaining.
      </li>
      <li>
        Refunds are initiated within 7 days of notification. The amount of time it takes before the money is credited back to the customer's account depends on the clearing cycle of the customer's bank.
      </li>
      <li>
        You will get a refund through the same payment method that you have selected at the time of the transaction. The refund will reflect within 8-9 working days in your account.
      </li>
    </ul>
  </div>
  )
}
Return.getLayout = function getLayout(page: ReactElement) {
    return (
      <CommonLayout>
        {page}
      </CommonLayout>
    )
  }
export default Return