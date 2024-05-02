/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({params, request, context}) {
  return context.customerAccount.login();
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */