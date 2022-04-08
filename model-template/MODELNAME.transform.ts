import { MODELNAMEPropsType } from "./MODELNAMEPage";
import { MODELNAMEIncomingType } from "./MODELNAME.api";

const MODELNAMETransform = (incoming: MODELNAMEIncomingType): MODELNAMEPropsType => ({
    ...incoming,
});

export default MODELNAMETransform;
