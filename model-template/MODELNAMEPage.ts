import React from 'react';
import { QueryClient } from 'react-query';
import { GetServerSidePropsContext } from 'next/types';
import { MODELNAMEParams, prefetchMODELNAME, useMODELNAME } from "./MODELNAME";
import { Locales } from '../types/locales';
import { MODELNAMEIncomingType } from '../models/MODELNAME/MODELNAME.types';
import { CmsResponse } from '../middleware/calls/cmsGet';
import { withGlobalProps } from '../middleware/withGlobalProps';
import queryParamToString from '../helpers/queryParamToString';

// This Page is highly dependent on a certain structure for your project:
// - withGlobalProps
// - cmsGet
// - queryParamToString (if your page uses dynamic endpoints based on route and slug
// - _app that injects queryParams into component

// After generation move this file to its folder in /pages/??? and change the filename to match your routing
export type MODELNAMEPropsType = MODELNAMEIncomingType;

export const getServerSideProps = withGlobalProps<MODELNAMEPropsType, MODELNAMEParams>(
    async (ctx: GetServerSidePropsContext, queryClient: QueryClient) => {
        const slug = queryParamToString(ctx.query.slug);
        const queryParams: MODELNAMEParams = { slug, queryKey: `MODELNAME-${slug}`, locale: ctx.locale as Locales };
        await prefetchMODELNAME(queryClient, queryParams);

        return queryParams;
    }
);

const MODELNAMEPage: React.FC<MODELNAMEParams> = (params) => {
    const { data } = useMODELNAME(params);
    if (!data || data.type !== CmsResponse.OK || !data.pageData) return null;

    return <>Your MODELNAMEPage</>;
};

export default MODELNAMEPage;