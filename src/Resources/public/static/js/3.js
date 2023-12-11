(this["webpackJsonpPluginksk-heptacom-admin-open-auth"]=this["webpackJsonpPluginksk-heptacom-admin-open-auth"]||[]).push([[3],{hu90:function(e,n,t){"use strict";t.r(n);t("iJVl"),n.default={template:'{% block heptacom_admin_open_auth_client_rule_item %}\n    <sw-collapse\n        expand-on-loading\n        class="heptacom-admin-open-auth-rule-item__collapse"\n    >\n        <template #header="{ expanded }">\n            <div class="heptacom-admin-open-auth-rule-item__collapse-header">\n                <h4\n                    class="heptacom-admin-open-auth-rule-item__collapse-header-title"\n                >\n                    {{ $tc(\'heptacom-admin-open-auth-client.components.rule-item.title\', rule.position + 1) }}\n                </h4>\n\n                <sw-icon\n                    v-if="expanded"\n                    class="heptacom-admin-open-auth-rule-item__collapse-header-collapsed-indicator"\n                    name="regular-chevron-down-xxs"\n                    size="12px"\n                />\n\n                <sw-icon\n                    v-else\n                    class="heptacom-admin-open-auth-rule-item__collapse-header-collapsed-indicator"\n                    name="regular-chevron-right-xxs"\n                    size="12px"\n                />\n            </div>\n        </template>\n\n        <template #content>\n            <sw-condition-tree\n                    v-if="rule && conditionRepository"\n                    class="heptacom-admin-open-auth-rule-item__condition-tree"\n                    association-field="clientRuleId" {# the field that is used for assigning the rule to its parent #}\n                    :scopes="scopes"\n                    :initial-conditions="rule.conditions"\n                    :condition-repository="conditionRepository" {# any entity repository that has children and  the above specified association field #}\n                    :condition-data-provider-service="heptacomOauthRuleDataProvider"\n                    :association-value="rule.id" {# the association id (so in this case the ruleId) #}\n                    {#            :association-entity="rule"#}\n                    :root-condition="null"\n                    @conditions-changed="onConditionsChanged"\n            />\n\n            <sw-switch-field\n                    :label="$t(\'heptacom-admin-open-auth-client.pages.edit.fields.userBecomeAdmin\')"\n                    v-model="rule.userBecomeAdmin"\n            ></sw-switch-field>\n\n            <sw-entity-multi-select\n                    v-if="!rule.userBecomeAdmin"\n                    v-model="rule.aclRoles"\n                    :label="$t(\'heptacom-admin-open-auth-client.pages.edit.fields.defaultAclRoles\')"\n                    entityName="acl_role"\n            ></sw-entity-multi-select>\n\n            <div class="heptacom-admin-open-auth-rule-item__collapse-footer">\n                <sw-button\n                    variant="ghost"\n                    @click="onMoveUp"\n                >\n                    <sw-icon\n                        name="regular-chevron-up-xxs"\n                        size="12px"\n                    />\n                    {{ $tc(\'heptacom-admin-open-auth-client.components.rule-item.moveUp\') }}\n                </sw-button>\n\n                <sw-button\n                    variant="danger"\n                    @click="onDelete"\n                >\n                    {{ $tc(\'global.default.delete\') }}\n                </sw-button>\n\n                <sw-button\n                    variant="ghost"\n                    @click="onMoveDown"\n                >\n                    {{ $tc(\'heptacom-admin-open-auth-client.components.rule-item.moveDown\') }}\n                    <sw-icon\n                        name="regular-chevron-down-xxs"\n                        size="12px"\n                    />\n                </sw-button>\n            </div>\n        </template>\n    </sw-collapse>\n{% endblock %}\n',inject:["repositoryFactory","heptacomOauthRuleDataProvider"],props:{isLoading:{required:!1,type:Boolean,default:!1},client:{required:!0,type:Object},rule:{required:!0,type:Object}},computed:{conditionRepository:function(){return this.repositoryFactory.create("heptacom_admin_open_auth_client_rule_condition")},scopes:function(){return["global",this.client.provider]}},methods:{onConditionsChanged:function(e){var n=e.deletedIds;n.length>0&&this.$emit("conditions-deleted",n)},onMoveUp:function(){this.$emit("move-up",{})},onMoveDown:function(){this.$emit("move-down",{})},onDelete:function(){this.$emit("delete",{})}}}},iJVl:function(e,n,t){var o=t("vbDb");o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,t("ydqr").default)("98fe5f16",o,!0,{})},vbDb:function(e,n,t){},ydqr:function(e,n,t){"use strict";function o(e,n){for(var t=[],o={},i=0;i<n.length;i++){var a=n[i],s=a[0],r={id:e+":"+i,css:a[1],media:a[2],sourceMap:a[3]};o[s]?o[s].parts.push(r):t.push(o[s]={id:s,parts:[r]})}return t}t.r(n),t.d(n,"default",(function(){return m}));var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},s=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,l=0,c=!1,d=function(){},u=null,p="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,n,t,i){c=t,u=i||{};var s=o(e,n);return f(s),function(n){for(var t=[],i=0;i<s.length;i++){var r=s[i];(l=a[r.id]).refs--,t.push(l)}n?f(s=o(e,n)):s=[];for(i=0;i<t.length;i++){var l;if(0===(l=t[i]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete a[l.id]}}}}function f(e){for(var n=0;n<e.length;n++){var t=e[n],o=a[t.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](t.parts[i]);for(;i<t.parts.length;i++)o.parts.push(g(t.parts[i]));o.parts.length>t.parts.length&&(o.parts.length=t.parts.length)}else{var s=[];for(i=0;i<t.parts.length;i++)s.push(g(t.parts[i]));a[t.id]={id:t.id,refs:1,parts:s}}}}function v(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var n,t,o=document.querySelector("style["+p+'~="'+e.id+'"]');if(o){if(c)return d;o.parentNode.removeChild(o)}if(h){var i=l++;o=r||(r=v()),n=w.bind(null,o,i,!1),t=w.bind(null,o,i,!0)}else o=v(),n=_.bind(null,o),t=function(){o.parentNode.removeChild(o)};return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else t()}}var y,b=(y=[],function(e,n){return y[e]=n,y.filter(Boolean).join("\n")});function w(e,n,t,o){var i=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=b(n,i);else{var a=document.createTextNode(i),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(a,s[n]):e.appendChild(a)}}function _(e,n){var t=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),u.ssrId&&e.setAttribute(p,n.id),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}}]);