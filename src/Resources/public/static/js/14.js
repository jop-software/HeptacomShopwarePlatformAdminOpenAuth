(this["webpackJsonpPluginksk-heptacom-admin-open-auth"]=this["webpackJsonpPluginksk-heptacom-admin-open-auth"]||[]).push([[14],{"1fUb":function(e,i,n){"use strict";n.r(i);i.default={template:'{% block heptacom_admin_open_auth_provider_microsoft_azure_oidc_settings %}\n    <sw-card position-identifier="heptacom-admin-open-auth-provider-microsoft-azure-oidc-settings">\n        <sw-text-field\n            required\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.microsoft_azure_oidc.tenantId\')"\n            v-model="item.config.tenantId"\n        ></sw-text-field>\n        <sw-text-field\n            required\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.microsoft_azure_oidc.clientId\')"\n            v-model="item.config.clientId"\n        ></sw-text-field>\n        <sw-password-field\n            required\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.microsoft_azure_oidc.clientSecret\')"\n            v-model="item.config.clientSecret"\n        ></sw-password-field>\n        <heptacom-admin-open-auth-scope-field\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.microsoft_azure_oidc.additionalScopes\')"\n            v-model="item.config.scopes"\n        ></heptacom-admin-open-auth-scope-field>\n    </sw-card>\n{% endblock %}\n',props:{item:{required:!0}},watch:{item:function(e){e.config.scopes||(e.config.scopes=[])}}}}}]);
//# sourceMappingURL=14.js.map