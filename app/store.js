import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import appReducer from './redux'


export default createStore(appReducer)
