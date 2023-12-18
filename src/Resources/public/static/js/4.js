(this["webpackJsonpPluginksk-heptacom-admin-open-auth"]=this["webpackJsonpPluginksk-heptacom-admin-open-auth"]||[]).push([[4],{"Mx+V":function(e,t,n){"use strict";n.r(t);n("NdOQ"),t.default={template:'{% block heptacom_admin_open_auth_client_create_page %}\n    <sw-page\n        :showSmartBar="false"\n        :showSearchBar="false"\n        class="heptacom-admin-open-auth-client-create-page"\n    >\n        {% block heptacom_admin_open_auth_client_create_page_inner %}{% endblock %}\n\n        {% block heptacom_admin_open_auth_client_create_page_content %}\n            <template #content>\n                <template\n                    v-if="isLoading"\n                >\n                    {% block heptacom_admin_open_auth_client_create_page_content_loader %}\n                        <sw-loader></sw-loader>\n                    {% endblock %}\n                </template>\n                <template\n                    v-else\n                >\n                    {% block heptacom_admin_open_auth_client_create_page_content_providers %}\n                        <sw-card-view class="heptacom-admin-open-auth-client-create_card-view">\n                            {% block heptacom_admin_open_auth_client_create_page_content_providers_list %}\n                                <sw-card\n                                    v-for="provider of items"\n                                    :key="provider.key"\n                                    :title="provider.label"\n                                    :classes="provider.classes"\n                                    :position-identifier="\'heptacom-admin-open-auth-client-create-provider-\' + provider.key"\n                                >\n                                    {% block heptacom_admin_open_auth_client_create_page_content_providers_list_item %}\n                                        {% block heptacom_admin_open_auth_client_create_page_content_providers_list_item_logo %}\n                                            <div class="logo">\n                                                <img :src="\'/kskheptacomadminopenauth/static/logo/\'+provider.logoFile | asset">\n                                            </div>\n                                        {% endblock %}\n\n                                        {% block heptacom_admin_open_auth_client_create_page_content_providers_list_item_action %}\n                                            <sw-button\n                                                @click="createClient(provider)"\n                                                class="heptacom-admin-open-auth-client-create-page-providers-provider--action"\n                                                variant="ghost"\n                                                block\n                                            >\n                                                {{ provider.actionLabel }}\n                                            </sw-button>\n                                        {% endblock %}\n                                    {% endblock %}\n                                </sw-card>\n                            {% endblock %}\n                        </sw-card-view>\n                    {% endblock %}\n                </template>\n            </template>\n        {% endblock %}\n    </sw-page>\n{% endblock %}\n',inject:["HeptacomAdminOpenAuthProviderApiService"],data:function(){return{isLoading:!0,items:null}},created:function(){this.loadData()},methods:{loadData:function(){var e=this;this.isLoading=!0,this.loadProviders().then((function(){e.isLoading=!1}))},loadProviders:function(){var e=this;return this.items=[],this.HeptacomAdminOpenAuthProviderApiService.list().then((function(t){e.items=t.data.map((function(t){return{key:t,label:e.$t("heptacomAdminOpenAuthClient.providers.".concat(t,".label")),logoFile:e.$t("heptacomAdminOpenAuthClient.providers.".concat(t,".logoFile")),actionLabel:e.$te(".heptacomAdminOpenAuthClient.providersCreate.".concat(t))?e.$t("heptacomAdminOpenAuthClient.providersCreate.".concat(t)):e.$t("heptacom-admin-open-auth-client.pages.create.actions.create"),classes:["heptacom-admin-open-auth-client-create-page-providers-provider","heptacom-admin-open-auth-client-create-page-providers--provider-".concat(t)]}})).sort((function(e,t){return e.label.localeCompare(t.label)})),e.isLoading=!1}))},createClient:function(e){var t=this;return this.HeptacomAdminOpenAuthProviderApiService.factorize(e.key).then((function(e){t.$router.push({name:"heptacom.admin.open.auth.client.edit",params:{id:e.data.id}})}))}}}},NdOQ:function(e,t,n){var a=n("eGRW");a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,n("P8hj").default)("a6db1eac",a,!0,{})},P8hj:function(e,t,n){"use strict";function a(e,t){for(var n=[],a={},o=0;o<t.length;o++){var i=t[o],r=i[0],c={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};a[r]?a[r].parts.push(c):n.push(a[r]={id:r,parts:[c]})}return n}n.r(t),n.d(t,"default",(function(){return m}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},r=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,s=0,d=!1,l=function(){},p=null,u="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,n,o){d=n,p=o||{};var r=a(e,t);return _(r),function(t){for(var n=[],o=0;o<r.length;o++){var c=r[o];(s=i[c.id]).refs--,n.push(s)}t?_(r=a(e,t)):r=[];for(o=0;o<n.length;o++){var s;if(0===(s=n[o]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete i[s.id]}}}}function _(e){for(var t=0;t<e.length;t++){var n=e[t],a=i[n.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](n.parts[o]);for(;o<n.parts.length;o++)a.parts.push(f(n.parts[o]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var r=[];for(o=0;o<n.parts.length;o++)r.push(f(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:r}}}}function v(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function f(e){var t,n,a=document.querySelector("style["+u+'~="'+e.id+'"]');if(a){if(d)return l;a.parentNode.removeChild(a)}if(h){var o=s++;a=c||(c=v()),t=k.bind(null,a,o,!1),n=k.bind(null,a,o,!0)}else a=v(),t=w.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var g,b=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function k(e,t,n,a){var o=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=b(t,o);else{var i=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function w(e,t){var n=t.css,a=t.media,o=t.sourceMap;if(a&&e.setAttribute("media",a),p.ssrId&&e.setAttribute(u,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},eGRW:function(e,t,n){}}]);
//# sourceMappingURL=4.js.map