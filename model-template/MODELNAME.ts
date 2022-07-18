import MODELNAMETransform from "./MODELNAME.transform";
import { MODELNAMEPropsType } from "./MODELNAMEPage";
import { QueryClient, useQuery, UseQueryOptions } from 'react-query';
import { MODELNAMEIncomingType } from "./MODELNAME.api";
import { Locales } from '../../types/locales';
import ApiEndpoints from '../../types/ApiEndpoints';

// DO NOT REMOVE OR RENAME THIS VARIABLE. This is used to update the automatic typing of the endpoint
const QUICKTYPE_ENDPOINT = "MODEL_QUICKTYPE_ENDPOINT";

export type MODELNAMEParams = {
    slug: string;
    queryKey: string;
    locale: Locales;
};

export const optionsMODELNAME: UseQueryOptions<CmsGetReturnType<MODELNAMEPropsType>, Error> = {
    refetchOnWindowFocus: false,
    staleTime: 60000, // 1 minute
};

const endpoints: ApiEndpoints = {
    // TODO replace these with actual endpoint bases
    nl: 'MODEL_QUICKTYPE_ENDPOINT',
    en: 'MODEL_QUICKTYPE_ENDPOINT',
};

    // Do your fetch here and then transform the returning data as you wish (or not)
    // Do not forget to replace MODEL_QUICKTYPE_ENDPOINT if your endpoint is dynamic based on a slug for example
    // Use a regular fetch or cmsGet (note that cmsGet does not directly return MODELNAMEPropsType but is wrapped in CmsGetReturnType<MODELNAMEPropsType>
// TODO replace the model_quicktype_endpoint
export const fetchMODELNAME = ({ slug, locale }: MODELNAMEParams) => cmsGet<MODELNAMEIncomingType, MODELNAMEPropsType>(`MODEL_QUICKTYPE_ENDPOINT`, locale, MODELNAMETransform);

// Client side hook
export const useMODELNAME = (params: MODELNAMEParams) =>
    useQuery<CmsGetReturnType<MODELNAMEPropsType>, Error>(
        params.queryKey,
        () => fetchMODELNAME(params),
        optionsMODELNAME
    );

// Server side
export const prefetchMODELNAME = (queryClient: QueryClient, params: MODELNAMEParams) =>
    queryClient.prefetchQuery<CmsGetReturnType<MODELNAMEPropsType>, Error>(
        params.queryKey,
        () => fetchMODELNAME(params),
        optionsMODELNAME
    );
