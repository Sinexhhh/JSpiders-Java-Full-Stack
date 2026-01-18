import { StatesInFbc2} from "./state/StatesInFbc2"
import StatesInFbc3 from "./state/StatesInFbc3"
import Cbc from "./state/Cbc"
import GrandParent from "./props/GrandParent"
import PropsChild from "./props/PropsChild"
import PropsParent from "./props/PropsParent"

const App = ()=>{
    return(
        <div>
            {/* <StatesInFbc2/> */}
            {/* <StatesInFbc3/> */}
            {/* <Cbc/> */}
            {/* <GrandParent/>*/}
        <PropsParent/>
        </div>
    )
}
export default App