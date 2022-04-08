import { MODELNAMEIncomingType } from "./MODELNAME.transform.d";
import { MODELNAMEPropsType } from "./MODELNAME";

const MODELNAMETransform = (incoming: MODELNAMEIncomingType): MODELNAMEPropsType => ({
    ...incoming,
});

export default MODELNAMETransform;
