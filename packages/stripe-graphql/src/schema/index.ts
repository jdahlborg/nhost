import './address'
import './customer'
import './customer-shipping'
import './customer-tax'
import './customer-tax-location'
import './payment-methods'
import './payment-method'
import './payment-method-billing-details'
import './payment-method-card'
import './payment-method-card-checks'
import './payment-method-card-networks'
import './payment-method-card-three-d-secure-usage'
import './payment-method-card-wallet-masterpass'
import './payment-method-card-wallet-visa-checkout'
import './payment-method-card-wallet'
import './stripe'
import './subscriptions'
import './subscription'
import './invoices'
import './invoice'

import { builder } from '../builder'

const schema = builder.toSchema()

export { schema }