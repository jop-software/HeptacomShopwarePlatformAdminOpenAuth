import './app/components/heptacom-admin-open-auth-scope-field';
import './extension/sw-profile-index';
import './module/heptacom-admin-open-auth-client';
import './provider/jira/heptacom-admin-open-auth-client-edit-page';
import './provider/microsoft_azure/heptacom-admin-open-auth-client-edit-page';
import './provider/open_id_connect/heptacom-admin-open-auth-client-edit-page';
import './init/services.init';
import globalSnippets from './snippets';
import extensionSnippets from './extension/snippets';
import providerJiraSnippets from './provider/jira/snippets';
import providerMicrosoftAzureSnippets from './provider/microsoft_azure/snippets';
import providerOpenIdConnectSnippets from './provider/open_id_connect/snippets';

const { Locale } = Shopware;

[globalSnippets, extensionSnippets, providerJiraSnippets, providerMicrosoftAzureSnippets, providerOpenIdConnectSnippets]
    .map(Object.entries)
    .flat()
    .forEach(([lang, snippets]) => Locale.extend(lang, snippets));
