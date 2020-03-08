(this.webpackJsonp=this.webpackJsonp||[]).push([["heptacom-admin-open-auth"],{"0AMJ":function(e){e.exports=JSON.parse('{"heptacom-admin-open-auth-client":{"module":{"description":"Allow OAuth providers to provide admin logins","name":"HEPTACOM Open Authentication Login","title":"OAuth Login"},"pages":{"create":{"actions":{"create":"Choose"}},"edit":{"title":"Edit provider","actions":{"save":"Save","cancel":"Cancel"},"fields":{"name":"Name","active":"Active","login":"Use as login","connect":"Use to connect"}},"listing":{"actions":{"create":"Create","refresh":"Refresh"},"columns":{"active":"State","createdAt":"Created","name":"Name","provider":"Provider","users":"Users"}}}}}')},"2EeP":function(e){e.exports=JSON.parse('{"heptacom-admin-open-auth-client":{"module":{"description":"Erlaubt die Anmeldung über OAuth Anbieter","name":"HEPTACOM Open Authentication Login","title":"OAuth Anmeldung"},"pages":{"create":{"actions":{"create":"Auswählen"}},"edit":{"title":"Anbieter bearbeiter","actions":{"save":"Speichern","cancel":"Abbrechen"},"fields":{"name":"Name","active":"Aktiv","login":"Als Anmeldung verwenden","connect":"Zum Verknüpfen verwenden"}},"listing":{"actions":{"create":"Erstellen","refresh":"Neuladen"},"columns":{"active":"Status","createdAt":"Erstellt","name":"Name","provider":"Anbieter","users":"Benutzer"}}}}}')},"2OmA":function(e){e.exports=JSON.parse('{"heptacomAdminOpenAuthClient":{"providers":{"jira":"Atlassian Jira"},"providerFields":{"jira":{"redirectUri":"Redirect URL","additionalScopes":"Application scopes","appId":"Application identifier","appSecret":"Application secret"}}}}')},"5IcM":function(e,t){e.exports='{% block heptacom_admin_open_auth_client_edit_page %}\n    <sw-page\n        :showSearchBar="false"\n        class="heptacom-admin-open-auth-client-edit-page"\n    >\n        {% block heptacom_admin_open_auth_client_edit_page_inner %}\n        {% endblock %}\n\n        {% block heptacom_admin_open_auth_client_edit_page_smart_bar_header %}\n            <template #smart-bar-header>\n                {{ dynamicName }}\n            </template>\n        {% endblock %}\n\n        {% block heptacom_admin_open_auth_client_edit_page_search_bar_actions %}\n            <template #smart-bar-actions>\n                {% block heptacom_admin_open_auth_client_edit_page_search_bar_actions_cancel %}\n                    <sw-button\n                        :disabled="isLoading"\n                        @click="cancelEdit"\n                    >\n                        {{ $t(\'heptacom-admin-open-auth-client.pages.edit.actions.cancel\') }}\n                    </sw-button>\n                {% endblock %}\n\n                {% block heptacom_admin_open_auth_client_edit_page_search_bar_actions_save %}\n                    <sw-button-process\n                        :disabled="isLoading"\n                        :isLoading="isLoading"\n                        @click.prevent="saveItem"\n                        v-model="isSaveSuccessful"\n                        variant="primary"\n                    >\n                        {{ $t(\'heptacom-admin-open-auth-client.pages.edit.actions.save\') }}\n                    </sw-button-process>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n        {% block heptacom_admin_open_auth_client_edit_page_content %}\n            <template #content>\n                <sw-card-view>\n                    {% block heptacom_admin_open_auth_client_edit_page_content_base_settings %}\n                        <sw-card\n                            :isLoading="isLoading"\n                        >\n                            <template v-if="item">\n                                <sw-text-field\n                                    :label="$t(\'heptacom-admin-open-auth-client.pages.edit.fields.name\')"\n                                    v-model="item.name"\n                                ></sw-text-field>\n                                <sw-switch-field\n                                    :label="$t(\'heptacom-admin-open-auth-client.pages.edit.fields.active\')"\n                                    v-model="item.active"\n                                ></sw-switch-field>\n                                <sw-switch-field\n                                    :disabled="!item.active"\n                                    :label="$t(\'heptacom-admin-open-auth-client.pages.edit.fields.login\')"\n                                    v-model="item.login"\n                                ></sw-switch-field>\n                                <sw-switch-field\n                                    :disabled="!item.active"\n                                    :label="$t(\'heptacom-admin-open-auth-client.pages.edit.fields.connect\')"\n                                    v-model="item.connect"\n                                ></sw-switch-field>\n                            </template>\n                        </sw-card>\n                    {% endblock %}\n\n                    {% block heptacom_admin_open_auth_client_edit_page_content_provider_settings %}{% endblock %}\n                </sw-card-view>\n            </template>\n        {% endblock %}\n    </sw-page>\n{% endblock %}\n'},"61Ms":function(e,t,n){},"6jQ+":function(e,t,n){var i=n("61Ms");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("f11c454a",i,!0,{})},"AS+X":function(e,t){e.exports='{% block heptacom_admin_open_auth_client_create_page %}\n    <sw-page\n        :showSmartBar="false"\n        :showSearchBar="false"\n        class="heptacom-admin-open-auth-client-create-page"\n    >\n        {% block heptacom_admin_open_auth_client_create_page_inner %}{% endblock %}\n\n        {% block heptacom_admin_open_auth_client_create_page_content %}\n            <template #content>\n                <template\n                    v-if="isLoading"\n                >\n                    {% block heptacom_admin_open_auth_client_create_page_content_loader %}\n                        <sw-loader></sw-loader>\n                    {% endblock %}\n                </template>\n                <template\n                    v-else\n                >\n                    {% block heptacom_admin_open_auth_client_create_page_content_providers %}\n                        <sw-card-view>\n                            {% block heptacom_admin_open_auth_client_create_page_content_providers_list %}\n                                <sw-card\n                                    v-for="provider of items"\n                                    :key="provider.key"\n                                    :title="provider.label"\n                                    :classes="provider.classes"\n                                    hero\n                                    large\n                                >\n                                    {% block heptacom_admin_open_auth_client_create_page_content_providers_list_item %}\n                                        {% block heptacom_admin_open_auth_client_create_page_content_providers_list_item_action %}\n                                            <sw-button\n                                                @click="createClient(provider)"\n                                                class="heptacom-admin-open-auth-client-create-page-providers-provider--action"\n                                                variant="ghost"\n                                                block\n                                            >\n                                                {{ provider.actionLabel }}\n                                            </sw-button>\n                                        {% endblock %}\n                                    {% endblock %}\n                                </sw-card>\n                            {% endblock %}\n                        </sw-card-view>\n                    {% endblock %}\n                </template>\n            </template>\n        {% endblock %}\n    </sw-page>\n{% endblock %}\n'},"BtS+":function(e){e.exports=JSON.parse('{"heptacomAdminOpenAuthClient":{"providers":{"jira":"Atlassian Jira"},"providerFields":{"jira":{"redirectUri":"Rücksende-URL","additionalScopes":"Anwendungsberechtigungen","appId":"Anwendungsschlüssel","appSecret":"Anwendungsgehemnis"}}}}')},E3ec:function(e){e.exports=JSON.parse('{"sw-profile-index":{"titleHeptacomAdminOpenAuthCard":"OAuth","heptacomAdminOpenAuth":{"userKeys":{"columns":{"provider":"Provider","createdAt":"Connected at"},"actions":{"connect":"Connect","revoke":"Disconnect"}}}}}')},EZ4G:function(e,t,n){"use strict";n.r(t);n("6jQ+");var i=n("u8iX"),a=n.n(i);const{Component:o}=Shopware;o.register("heptacom-admin-open-auth-scope-field",{inheritAttrs:!1,template:a.a,props:{value:{required:!0,type:Array},defaultScopes:{required:!1,type:Array,default:()=>[]}},data(){return{innerValue:this.value.filter(e=>-1===this.defaultScopes.indexOf(e)).map(e=>({name:e}))}},watch:{value(e){this.items=e}},computed:{defaultScopeItems(){return this.defaultScopes.map(e=>({name:e}))},items:{get(){return this.innerValue.map(e=>e.name)},set(e){this.innerValue=e.map(e=>({name:e}))}}},methods:{addItem(e){this.isDefaultScope(e)||(this.innerValue=this.innerValue.filter(t=>t.name!==e),this.innerValue.push({name:e}),this.$emit("input",this.items))},removeItem(e){this.innerValue=this.innerValue.filter(t=>t.name!==e),this.$emit("input",this.items)},exceptInput:e=>e&&e.hasOwnProperty?Object.keys(e).reduce((t,n)=>("input"!==n&&(t[n]=e[n]),t),{}):e,isDefaultScope(e){return-1!==this.defaultScopes.findIndex(t=>t===e)}}});var c=n("h7FN"),s=n.n(c);const{Component:r,Context:p,Data:l}=Shopware,{Criteria:d}=l;r.override("sw-profile-index",{template:s.a,data:()=>({heptacomAdminOpenAuthLoading:!0,heptacomAdminOpenAuthClients:[]}),computed:{heptacomAdminOpenAuthClientsRepository(){return this.repositoryFactory.create("heptacom_admin_open_auth_client")},heptacomAdminOpenAuthUserEmailsRepository(){return this.repositoryFactory.create("heptacom_admin_open_auth_user_email")},heptacomAdminOpenAuthUserKeysRepository(){return this.repositoryFactory.create("heptacom_admin_open_auth_user_key")},heptacomAdminOpenAuthUserTokensRepository(){return this.repositoryFactory.create("heptacom_admin_open_auth_user_token")}},methods:{loadHeptacomAdminOpenAuth(e){this.heptacomAdminOpenAuthLoading=!0,this.heptacomAdminOpenAuthClients=[];const t=new d;return t.getAssociation("userKeys").addFilter(d.equals("userId",e)),t.getAssociation("userEmails").addFilter(d.equals("userId",e)),t.getAssociation("userTokens").addFilter(d.equals("userId",e)),this.heptacomAdminOpenAuthClientsRepository.search(t,p.api).then(e=>{this.heptacomAdminOpenAuthClients=e.filter(e=>e.active&&e.connect||e.userKeys.length>0),this.heptacomAdminOpenAuthLoading=!1})},revokeHeptacomAdminOpenAuthUserKey(e){return Promise.all([...e.userKeys.map(e=>this.heptacomAdminOpenAuthUserKeysRepository.delete(e.id,p.api)),...e.userEmails.map(e=>this.heptacomAdminOpenAuthUserEmailsRepository.delete(e.id,p.api)),...e.userTokens.map(e=>this.heptacomAdminOpenAuthUserTokensRepository.delete(e.id,p.api))]).then(()=>this.loadHeptacomAdminOpenAuth(this.user.id))},redirectToLoginMask(e){this.heptacomAdminOpenAuthClientsRepository.httpClient.get(`/_admin/open-auth/${e}/connect`).then(e=>{window.location.href=e.data.target})},getUserData(){return this.$super("getUserData").then(e=>this.loadHeptacomAdminOpenAuth(e.id).then(()=>e))}}});var m=n("AS+X"),h=n.n(m);const{Classes:_}=Shopware,{ApiService:u}=_;var g=class extends u{constructor(e,t,n="heptacom_admin_open_auth_provider"){super(e,t,n)}list(){const e=this.getBasicHeaders();return this.httpClient.get(`_action/${this.getApiBasePath()}/list`,{headers:e}).then(e=>u.handleResponse(e))}factorize(e){const t=this.getBasicHeaders();return this.httpClient.post(`_action/${this.getApiBasePath()}/factorize`,{provider_key:e},{headers:t}).then(e=>u.handleResponse(e))}};const{Component:b}=Shopware;b.register("heptacom-admin-open-auth-client-create-page",{template:h.a,inject:["HeptacomAdminOpenAuthProviderApiService"],data:()=>({isLoading:!0,items:null}),created(){this.loadData()},methods:{loadData(){this.isLoading=!0,this.loadProviders().then(()=>{this.isLoading=!1})},loadProviders(){return this.items=[],this.HeptacomAdminOpenAuthProviderApiService.list().then(e=>{this.items=e.data.map(e=>({key:e,label:this.$t(`heptacomAdminOpenAuthClient.providers.${e}`),actionLabel:this.$te(`.heptacomAdminOpenAuthClient.providersCreate.${e}`)?this.$t(`heptacomAdminOpenAuthClient.providersCreate.${e}`):this.$t("heptacom-admin-open-auth-client.pages.create.actions.create"),classes:["heptacom-admin-open-auth-client-create-page-providers-provider",`heptacom-admin-open-auth-client-create-page-providers--provider-${e}`]})).sort((e,t)=>e.label.localeCompare(t.label)),this.isLoading=!1})},createClient(e){return this.HeptacomAdminOpenAuthProviderApiService.factorize(e.key).then(e=>{this.$router.push({name:"heptacom.admin.open.auth.client.edit",params:{id:e.data.id}})})}}});var f=n("5IcM"),v=n.n(f);const{Component:A,Context:w,Mixin:k}=Shopware;A.register("heptacom-admin-open-auth-client-edit-page",{template:v.a,inject:["repositoryFactory"],mixins:[k.getByName("placeholder"),k.getByName("notification")],props:{clientId:{required:!0,type:String}},data:()=>({isLoading:!0,isSaveSuccessful:!1,item:null}),created(){this.loadData()},computed:{dynamicName(){return this.placeholder(this.item,"name",this.$t("heptacom-admin-open-auth-client.pages.edit.title"))},clientRepository(){return this.repositoryFactory.create("heptacom_admin_open_auth_client")}},methods:{loadData(){this.isLoading=!0,this.loadClient().then(()=>{this.isLoading=!1})},loadClient(){return this.item=null,this.clientRepository.get(this.clientId,w.api).then(e=>{this.item=e})},cancelEdit(){this.$router.push({name:this.$route.meta.parentPath})},saveItem(){this.isLoading=!0,this.clientRepository.save(this.item,w.api).then(()=>(this.isLoading=!1,this.isSaveSuccessful=!0,this.loadData())).catch(e=>{this.isLoading=!1;const t=this.client.name;throw this.createNotificationError({title:this.$tc("global.notification.notificationSaveErrorTitle"),message:this.$tc("global.notification.notificationSaveErrorMessage",0,{entityName:t})}),e})}}});n("wvh/");var y=n("NHzf"),S=n.n(y);const{Component:O,Context:C,Data:x,Mixin:L}=Shopware,{Criteria:$}=x;O.register("heptacom-admin-open-auth-client-listing-page",{template:S.a,inject:["repositoryFactory"],mixins:[L.getByName("listing")],data(){return{isLoading:!0,items:null,columns:[{property:"active",label:this.$t("heptacom-admin-open-auth-client.pages.listing.columns.active"),allowResize:!1,width:"50px"},{property:"name",label:this.$t("heptacom-admin-open-auth-client.pages.listing.columns.name"),routerLink:"heptacom.admin.open.auth.client.edit"},{property:"provider",label:this.$t("heptacom-admin-open-auth-client.pages.listing.columns.provider")},{property:"userKeys.length",label:this.$t("heptacom-admin-open-auth-client.pages.listing.columns.users"),width:"100px"},{property:"createdAt",label:this.$t("heptacom-admin-open-auth-client.pages.listing.columns.createdAt"),width:"200px"}]}},created(){this.getList()},computed:{clientRepository(){return this.repositoryFactory.create("heptacom_admin_open_auth_client")},clientCriteria(){const e=new $,t=this.getListingParams();return e.addAssociation("userKeys"),e.setLimit(t.limit),e.setPage(t.page),e.addSorting($.sort(t.sortBy||"name",t.sortDirection||"ASC")),t.term&&t.term.length&&e.addFilter($.contains("name",t.term)),e}},methods:{getList(){return this.loadData()},loadData(){this.isLoading=!0,this.loadClients().then(()=>{this.isLoading=!1})},loadClients(){return this.items=null,this.clientRepository.search(this.clientCriteria,C.api).then(e=>{this.items=e})},getLoginColor:e=>e.active?e.login?"#00cc00":"#cc0000":"#333333",getConnectColor:e=>e.active?e.connect?"#00cc00":"#cc0000":"#333333"}});var I={"de-DE":n("2EeP"),"en-GB":n("0AMJ")};const{Module:F}=Shopware;F.register("heptacom-admin-open-auth-client",{type:"plugin",name:"heptacom-admin-open-auth-client.module.name",title:"heptacom-admin-open-auth-client.module.title",description:"heptacom-admin-open-auth-client.module.description",color:"#FFC2A2",icon:"default-action-log-in",snippets:I,routes:{create:{component:"heptacom-admin-open-auth-client-create-page",path:"create",meta:{parentPath:"heptacom.admin.open.auth.client.settings"}},edit:{component:"heptacom-admin-open-auth-client-edit-page",path:"edit/:id",meta:{parentPath:"heptacom.admin.open.auth.client.settings"},props:{default:e=>({clientId:e.params.id})}},settings:{component:"heptacom-admin-open-auth-client-listing-page",path:"settings",meta:{parentPath:"sw.settings.index"}}},settingsItem:[{to:"heptacom.admin.open.auth.client.settings",group:"system",icon:"default-action-log-in"}]});var E=n("ML6f"),R=n.n(E);const{Component:U}=Shopware;U.override("heptacom-admin-open-auth-client-edit-page",{template:R.a});var N=n("JcZi"),P=n.n(N);const{Component:z}=Shopware;z.override("heptacom-admin-open-auth-client-edit-page",{template:P.a,watch:{item(e){e&&"microsoft_azure"===e.provider&&(e.config.scopes||(e.config.scopes=[]))}}});const{Application:B}=Shopware;B.addServiceProvider("HeptacomAdminOpenAuthProviderApiService",e=>{const t=B.getContainer("init");return new g(t.httpClient,e.loginService)});var D={"de-DE":n("gVjC"),"en-GB":n("vwSk")},j={"de-DE":n("UaGI"),"en-GB":n("E3ec")},H={"de-DE":n("BtS+"),"en-GB":n("2OmA")},J={"de-DE":n("dBP6"),"en-GB":n("lcsV")};const{Locale:M}=Shopware;[D,j,H,J].map(Object.entries).flat().forEach(([e,t])=>M.extend(e,t))},JcZi:function(e,t){e.exports='{% block heptacom_admin_open_auth_client_edit_page_content_provider_settings %}\n    {% parent %}\n\n    <sw-card\n        v-if="item && item.provider === \'microsoft_azure\'"\n    >\n        <sw-text-field\n            :copyable="true"\n            :copyableTooltip="true"\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.microsoft_azure.redirectUri\')"\n            :value="item.config.redirectUri"\n            disabled\n        ></sw-text-field>\n        <sw-text-field\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.microsoft_azure.appId\')"\n            v-model="item.config.appId"\n        ></sw-text-field>\n        <sw-password-field\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.microsoft_azure.appSecret\')"\n            v-model="item.config.appSecret"\n        ></sw-password-field>\n        <heptacom-admin-open-auth-scope-field\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.microsoft_azure.additionalScopes\')"\n            v-model="item.config.scopes"\n        ></heptacom-admin-open-auth-scope-field>\n    </sw-card>\n{% endblock %}\n'},ML6f:function(e,t){e.exports='{% block heptacom_admin_open_auth_client_edit_page_content_provider_settings %}\n    {% parent %}\n\n    <sw-card\n        v-if="item && item.provider === \'jira\'"\n    >\n        <sw-text-field\n            :copyable="true"\n            :copyableTooltip="true"\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.jira.redirectUri\')"\n            :value="item.config.redirectUri"\n            disabled\n        ></sw-text-field>\n        <sw-text-field\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.jira.appId\')"\n            v-model="item.config.appId"\n        ></sw-text-field>\n        <sw-password-field\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.jira.appSecret\')"\n            v-model="item.config.appSecret"\n        ></sw-password-field>\n        <heptacom-admin-open-auth-scope-field\n            :label="$t(\'heptacomAdminOpenAuthClient.providerFields.jira.additionalScopes\')"\n            :defaultScopes="[\'read:me\', \'read:jira-user\', \'offline_access\']"\n            v-model="item.config.scopes"\n        ></heptacom-admin-open-auth-scope-field>\n    </sw-card>\n{% endblock %}\n'},NHzf:function(e,t){e.exports='{% block heptacom_admin_open_auth_client_listing_page %}\n    <sw-page class="heptacom-admin-open-auth-client-listing-page">\n        {% block heptacom_admin_open_auth_client_listing_page_inner %}\n        {% endblock %}\n\n        {% block heptacom_admin_open_auth_client_listing_page_search_bar %}\n            <template #search-bar>\n                <sw-search-bar\n                    :initialSearch="term"\n                    @search="onSearch"\n                    initialSearchType="heptacom_admin_open_auth_client"\n                ></sw-search-bar>\n            </template>\n        {% endblock %}\n\n        {% block heptacom_admin_open_auth_client_listing_page_search_bar_actions %}\n            <template #smart-bar-actions>\n                <sw-button\n                    :routerLink="{ name: \'heptacom.admin.open.auth.client.create\' }"\n                    variant="primary"\n                >\n                    {{ $t(\'heptacom-admin-open-auth-client.pages.listing.actions.create\') }}\n                </sw-button>\n            </template>\n        {% endblock %}\n\n        {% block heptacom_admin_open_auth_client_listing_page_content %}\n            <template #content>\n                {% block heptacom_admin_open_auth_client_listing_page_content_entity_listing %}\n                    <sw-entity-listing\n                        v-if="items"\n                        :items="items"\n                        :repository="clientRepository"\n                        :showSelection="false"\n                        :columns="columns"\n                        :isLoading="!isLoading"\n                        :showActions="false"\n                    >\n                        {% block heptacom_admin_open_auth_client_listing_page_content_entity_listing_inner %}\n                        {% endblock %}\n\n                        {% block heptacom_admin_open_auth_client_listing_page_content_entity_listing_columns_active %}\n                            <template #column-active="{ item }">\n                                <sw-icon\n                                    :color="getLoginColor(item)"\n                                    name="default-action-log-in"\n                                    small\n                                ></sw-icon>\n                                <sw-icon\n                                    :color="getConnectColor(item)"\n                                    name="default-action-share"\n                                    small\n                                ></sw-icon>\n                            </template>\n                        {% endblock %}\n\n                        {% block heptacom_admin_open_auth_client_listing_page_content_entity_listing_columns_created_at %}\n                            <template #column-createdAt="{ item }">\n                                {{ item.createdAt | date({ hour: \'2-digit\', minute: \'2-digit\' }) }}\n                            </template>\n                        {% endblock %}\n\n                        {% block heptacom_admin_open_auth_client_listing_page_content_entity_listing_columns_provider %}\n                            <template #column-provider="{ item }">\n                                {{ $te(\'heptacomAdminOpenAuthClient.providers.\' + item.provider) ? $t(\'heptacomAdminOpenAuthClient.providers.\' + item.provider) : item.provider }}\n                            </template>\n                        {% endblock %}\n\n                        {% block heptacom_admin_open_auth_client_listing_page_content_entity_listing_pagination %}\n                            <template #pagination>\n                                <sw-pagination\n                                    :page="page"\n                                    :limit="limit"\n                                    :total="total"\n                                    :total-visible="7"\n                                    @page-change="onPageChange"\n                                ></sw-pagination>\n                            </template>\n                        {% endblock %}\n                    </sw-entity-listing>\n                {% endblock %}\n            </template>\n        {% endblock %}\n\n        {% block heptacom_admin_open_auth_client_listing_page_sidebar_container %}\n            <template #sidebar>\n                {% block heptacom_admin_open_auth_client_listing_page_sidebar %}\n                    <sw-sidebar>\n                        {% block heptacom_admin_open_auth_client_listing_page_sidebar_inner %}\n                        {% endblock %}\n\n                        {% block heptacom_admin_open_auth_client_listing_page_sidebar_refresh %}\n                            <sw-sidebar-item\n                                :title="$tc(\'heptacom-admin-open-auth-client.pages.listing.actions.refresh\')"\n                                @click="onRefresh"\n                                icon="default-arrow-360-left"\n                            ></sw-sidebar-item>\n                        {% endblock %}\n                    </sw-sidebar>\n                {% endblock %}\n            </template>\n        {% endblock %}\n    </sw-page>\n{% endblock %}\n'},UaGI:function(e){e.exports=JSON.parse('{"sw-profile-index":{"titleHeptacomAdminOpenAuthCard":"OAuth","heptacomAdminOpenAuth":{"userKeys":{"columns":{"provider":"Anbieter","createdAt":"Verbunden am"},"actions":{"connect":"Verbinden","revoke":"Verbindung trennen"}}}}}')},dBP6:function(e){e.exports=JSON.parse('{"heptacomAdminOpenAuthClient":{"providers":{"microsoft_azure":"Microsoft Azure"},"providerFields":{"microsoft_azure":{"redirectUri":"Rücksende-URL","additionalScopes":"Anwendungsberechtigungen","appId":"Anwendungsschlüssel","appSecret":"Anwendungsgehemnis"}}}}')},evzu:function(e,t,n){},gVjC:function(e){e.exports=JSON.parse('{"global":{"entities":{"heptacom_admin_open_auth_client":"OAuth Anmeldung"}}}')},h7FN:function(e,t){e.exports='{% block sw_profile_index_content %}\n    {% parent %}\n\n    {% block sw_profile_index_heptacom_admin_open_auth_card %}\n        <sw-card\n            :title="$tc(\'sw-profile-index.titleHeptacomAdminOpenAuthCard\')"\n            :isLoading="isUserLoading"\n            class="sw-profile__card sw-card--grid"\n        >\n            {% block sw_profile_index_heptacom_admin_open_auth_card_clients %}\n                <template>\n                    {% block sw_profile_index_heptacom_admin_open_auth_card_clients_cards %}\n                        <sw-container rows="1fr">\n                            <sw-card-section\n                                v-for="client of heptacomAdminOpenAuthClients"\n                                :key="client.id"\n                                divider="bottom"\n                            >\n                                {% block sw_profile_index_heptacom_admin_open_auth_card_clients_cards_item %}\n                                    <sw-container columns="1fr auto">\n                                        {% block sw_profile_index_heptacom_admin_open_auth_card_clients_cards_item_provider %}\n                                            <div>\n                                                {{ $te(\'heptacomAdminOpenAuthClient.providers.\' + client.provider)\n                                                    ? $t(\'heptacomAdminOpenAuthClient.providers.\' + client.provider)\n                                                    : client.provider }}\n                                            </div>\n                                        {% endblock %}\n\n                                        {% block sw_profile_index_heptacom_admin_open_auth_card_clients_cards_item_action %}\n                                            <sw-button\n                                                v-if="client.userKeys.length > 0"\n                                                @click="revokeHeptacomAdminOpenAuthUserKey(client)"\n                                                icon="default-basic-x-line"\n                                            >\n                                                {{ $t(\'sw-profile-index.heptacomAdminOpenAuth.userKeys.actions.revoke\') }}\n                                            </sw-button>\n                                            <sw-button\n                                                v-else-if="client.active && client.connect"\n                                                @click="redirectToLoginMask(client.id)"\n                                                icon="default-basic-x-line"\n                                            >\n                                                {{ $t(\'sw-profile-index.heptacomAdminOpenAuth.userKeys.actions.connect\') }}\n                                            </sw-button>\n                                        {% endblock %}\n                                    </sw-container>\n                                {% endblock %}\n                            </sw-card-section>\n                        </sw-container>\n                    {% endblock %}\n                </template>\n            {% endblock %}\n        </sw-card>\n    {% endblock %}\n{% endblock %}\n'},lcsV:function(e){e.exports=JSON.parse('{"heptacomAdminOpenAuthClient":{"providers":{"microsoft_azure":"Microsoft Azure"},"providerFields":{"microsoft_azure":{"redirectUri":"Redirect URL","additionalScopes":"Application scopes","appId":"Application identifier","appSecret":"Application secret"}}}}')},u8iX:function(e,t){e.exports='{% block heptacom_admin_open_auth_scope_field %}\n    <div class="heptacom-admin-open-auth-scope-field">\n        {% block heptacom_admin_open_auth_scope_field_confirm %}\n            <sw-confirm-field\n                v-bind="exceptInput($attrs)"\n                v-on="exceptInput($listeners)"\n                :preventEmptySubmit="true"\n                @input="addItem"\n                ref="confirmField"\n            ></sw-confirm-field>\n        {% endblock %}\n\n        {% block heptacom_admin_open_auth_scope_field_default_scopes_grid %}\n            <sw-grid\n                :header="false"\n                :selectable="false"\n                :table="true"\n                :items="defaultScopeItems">\n                {% block heptacom_admin_open_auth_scope_field_default_scopes_grid_inner %}\n                {% endblock %}\n\n                <template slot="columns" slot-scope="{ item }">\n                    {% block heptacom_admin_open_auth_scope_field_default_scopes_grid_columns %}\n                        {% block heptacom_admin_open_auth_scope_field_default_scopes_grid_columns_name %}\n                            <sw-grid-column>\n                                {{ item.name }}\n                            </sw-grid-column>\n                        {% endblock %}\n                    {% endblock %}\n                </template>\n            </sw-grid>\n        {% endblock %}\n\n        {% block heptacom_admin_open_auth_scope_field_items_grid %}\n            <sw-grid\n                :header="false"\n                :selectable="false"\n                :table="true"\n                :items="innerValue">\n                {% block heptacom_admin_open_auth_scope_field_items_grid_inner %}\n                {% endblock %}\n\n                <template slot="columns" slot-scope="{ item }">\n                    {% block heptacom_admin_open_auth_scope_field_items_grid_columns %}\n                        {% block heptacom_admin_open_auth_scope_field_items_grid_columns_name %}\n                            <sw-grid-column\n                                flex="1fr"\n                            >\n                                {{ item.name }}\n                            </sw-grid-column>\n                        {% endblock %}\n\n                        {% block heptacom_admin_open_auth_scope_field_items_grid_columns_actions %}\n                            <sw-grid-column\n                                align="right"\n                                flex="auto"\n                            >\n                                {% block heptacom_admin_open_auth_scope_field_items_grid_columns_actions_remove %}\n                                    <sw-button\n                                        @click="removeItem(item.name)"\n                                        size="x-small"\n                                        variant="danger"\n                                        square\n                                    >\n                                        <sw-icon\n                                            name="small-default-x-line-small"\n                                            small\n                                        ></sw-icon>\n                                    </sw-button>\n                                {% endblock %}\n                            </sw-grid-column>\n                        {% endblock %}\n                    {% endblock %}\n                </template>\n            </sw-grid>\n        {% endblock %}\n    </div>\n{% endblock %}\n'},vwSk:function(e){e.exports=JSON.parse('{"global":{"entities":{"heptacom_admin_open_auth_client":"OAuth Login"}}}')},"wvh/":function(e,t,n){var i=n("evzu");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,n("SZ7m").default)("76e3fb69",i,!0,{})}},[["EZ4G","runtime","vendors-node"]]]);