import { requireAuth, testMiddleware } from "./auth-middlewares";

// TODO: change the path names to accept dynamic paths
enum Pathnames {
    DASHBOARD = '/dashboard',
    FORM_BUILDER = '/builder',
    TEST_API = '/api/test'

}

export const middlewareConfig = {
    [Pathnames.DASHBOARD]: [requireAuth, testMiddleware],
    [Pathnames.FORM_BUILDER]: [requireAuth],
    [Pathnames.TEST_API]: [requireAuth, testMiddleware]
};
