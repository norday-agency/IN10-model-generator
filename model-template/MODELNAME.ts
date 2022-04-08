import MODELNAMETransform from "./MODELNAME.transform";
import { QueryClient, useQuery, UseQueryOptions } from 'react-query';

// DO NOT REMOVE OR RENAME THIS VARIABLE. This is used to update the automatic typing of the endpoint
const QUICKTYPE_ENDPOINT = "MODEL_QUICKTYPE_ENDPOINT";

// Your model probably corresponds to a page, so replace this with a reference to the typing of your page (or other object that needs the model data)
export type MODELNAMEPropsType = {

};

export type MODELNAMEParams = {
    slug: string;
    queryKey: string;
};

// Replace this MODELNAMEPropsType with the return type for this query, if you use cmsGet this would be CmsGetReturnType<MODELNAMEPropsType>, if you use a different fetcher
// This is possibly plug-and-play
type MODELNAMEReturnType = MODELNAMEPropsType;

export const optionsMODELNAME: UseQueryOptions<MODELNAMEReturnType, Error> = {
    refetchOnWindowFocus: false,
    staleTime: 60000, // 1 minute
};

export const fetchMODELNAME = ({ slug, queryKey }: MODELNAMEParams) => {
    // Do your fetch here and then transform the returning data as you wish (or not)
    // Do not forget to replace QUICKTYPE_ENDPOINT if your endpoint is dynamic based on a slug for example
    // Use a regular fetch or cmsGet (note that cmsGet does not directly return MODELNAMEPropsType but is wrapped in CmsGetReturnType<MODELNAMEPropsType>
    // return cmsGet(QUICKTYPE_ENDPOINT, (data: any) => MODELNAMETransform(data));
}

// Client side hook
export const useMODELNAME = (params: MODELNAMEParams) =>
    useQuery<MODELNAMEReturnType, Error>(
        params.queryKey,
        () => fetchMODELNAME(params),
        optionsMODELNAME
    );

// Server side
export const prefetchMODELNAME = (queryClient: QueryClient, params: MODELNAMEParams) =>
    queryClient.prefetchQuery<MODELNAMEReturnType, Error>(
        params.queryKey,
        () => fetchMODELNAME(params),
        optionsMODELNAME
    );
