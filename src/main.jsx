import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const PriceCard1 = [
 {
  id : 1,
  content : 'Single User',
  important : true
 },
 {
  id : 2,
  content : '50GB Storage',
  important : true
 },
 {
  id : 3,
  content : 'Unlimited Public Projecs',
  important : true
 },
 {
  id : 4,
  content : 'Community Access',
  important : true
 },
 {
  id : 5,
  content : 'Unlimited Private Projects',
  important : false
 },
 {
  id : 6,
  content : 'Dedicated Phone Support',
  important : false
 },
 {
  id : 7,
  content : 'Free Subdomain',
  important : false
 },
 {
  id : 8,
  content : 'Monthly Status Reports',
  important : false
 }
]

const PriceCard2 = [
 {
  id : 1,
  content : '5 User',
  important : true
 },
 {
  id : 2,
  content : '50GB Storage',
  important : true
 },
 {
  id : 3,
  content : 'Unlimited Public Projecs',
  important : true
 },
 {
  id : 4,
  content : 'Community Access',
  important : true
 },
 {
  id : 5,
  content : 'Unlimited Private Projects',
  important : true
 },
 {
  id : 6,
  content : 'Dedicated Phone Support',
  important : true
 },
 {
  id : 7,
  content : 'Free Subdomain',
  important : true
 },
 {
  id : 8,
  content : 'Monthly Status Reports',
  important : false
 }
]

const PriceCard3 = [
 {
  id : 1,
  content : 'Unlimited User',
  important : true
 },
 {
  id : 2,
  content : '50GB Storage',
  important : true
 },
 {
  id : 3,
  content : 'Unlimited Public Projecs',
  important : true
 },
 {
  id : 4,
  content : 'Community Access',
  important : true
 },
 {
  id : 5,
  content : 'Unlimited Private Projects',
  important : true
 },
 {
  id : 6,
  content : 'Dedicated Phone Support',
  important : true
 },
 {
  id : 7,
  content : 'Free Subdomain',
  important : true
 },
 {
  id : 8,
  content : 'Monthly Status Reports',
  important : true
 }
]

ReactDOM.createRoot(document.getElementById('root')).render(
    <App PriceCard1={PriceCard1} PriceCard2={ PriceCard2 } PriceCard3={ PriceCard3 } />
)
