import {useDispatch} from "react-redux"
import { bindActionCreators } from "redux"
import * as Actions from '../redux/Actions/user.Actions'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(Actions, dispatch)
}