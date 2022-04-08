import React from 'react';
import { QueryClient } from 'react-query';
import { GetServerSidePropsContext } from 'next/types';
import { MODELNAMEParams, MODELNAMEPropsType, prefetchMODELNAME, useMODELNAME } from "./MODELNAME";

// This Page is highly dependent on a certain structure for your project:
// - withGlobalProps
// - cmsGet
// - queryParamToString (if your page uses dynamic endpoints based on route and slug
// - _app that injects queryParams into component

// After generation move this file to its folder in /pages/??? and change the filename to match your routing

export const getServerSideProps = withGlobalProps<MODELNAMEPropsType, MODELNAMEParams>(
    async (ctx: GetServerSidePropsContext, queryClient: QueryClient) => {
        const slug = queryParamToString(ctx.query.slug);
        const queryParams: MODELNAMEParams = { slug, queryKey: `MODELNAME-${slug}` };
        await prefetchMODELNAME(queryClient, queryParams);

        return queryParams;
    }
);

const MODELNAMEPage: React.FC<MODELNAMEParams> = (params) => {
    const { data } = useMODELNAME(params);
    if (!data || data.type !== CmsResponse.OK || !data.pageData) return null;

    return <>Your page</>;
};

export default MODELNAMEPage;