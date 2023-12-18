(this["webpackJsonpPluginksk-heptacom-admin-open-auth"]=this["webpackJsonpPluginksk-heptacom-admin-open-auth"]||[]).push([[12],{I0LW:function(e,t,i){"use strict";i.r(t);t.default={template:'{% block heptacom_admin_open_auth_provider_jumpcloud_settings %}\n    {% block heptacom_admin_open_auth_provider_jumpcloud_settings_idp %}\n        <sw-card\n            :title="$t(\'heptacomAdminOpenAuthClient.providerFields.saml2.identityProviderCardTitle\')"\n            position-identifier="heptacom-admin-open-auth-provider-jumpcloud-settings-idp"\n        >\n            \n            <sw-textarea-field\n                :disabled="!!item.config.identityProviderMetadataUrl"\n                :label="$t(\'heptacomAdminOpenAuthClient.providerFields.jumpcloud.identityProviderMetadataXml\')"\n                v-model="item.config.identityProviderMetadataXml"\n            ></sw-textarea-field>\n        </sw-card>\n    {% endblock %}\n\n    {% block heptacom_admin_open_auth_provider_jumpcloud_settings_attribute_mapping %}\n        <sw-card\n            :title="$t(\'heptacomAdminOpenAuthClient.providerFields.saml2.attributeMapping.cardTitle\')"\n            position-identifier="heptacom-admin-open-auth-provider-jumpcloud-settings-attribute-mapping"\n        >\n            {% block heptacom_admin_open_auth_provider_jumpcloud_settings_attribute_mapping_inner %}\n                <sw-text-field v-for="mappedProperty of availableProperties"\n                               :label="$t(\'heptacomAdminOpenAuthClient.providerFields.saml2.attributeMapping.field.\' + mappedProperty)"\n                               v-model="item.config.attributeMapping[mappedProperty]"\n                ></sw-text-field>\n            {% endblock %}\n        </sw-card>\n    {% endblock %}\n{% endblock %}\n',props:{item:{required:!0}},data:function(){return{availableProperties:["firstName","lastName","email","timezone","locale","roles"]}},watch:{item:function(e){e.config.attributeMapping||(e.config.attributeMapping={})}}}}}]);