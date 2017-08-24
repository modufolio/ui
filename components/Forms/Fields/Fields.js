import Vue from 'vue'

/** Forms/Fields **/
import DateField from 'Forms/Fields/DateField/DateField.vue'
import TextField from 'Forms/Fields/TextField/TextField.vue'
import TextareaField from 'Forms/Fields/TextareaField/TextareaField.vue'
import TagsField from 'Forms/Fields/TagsField/TagsField.vue'
import EmailField from 'Forms/Fields/EmailField/EmailField.vue'
import NumberField from 'Forms/Fields/NumberField/NumberField.vue'
import UrlField from 'Forms/Fields/UrlField/UrlField.vue'
import TelField from 'Forms/Fields/TelField/TelField.vue'
import SelectField from 'Forms/Fields/SelectField/SelectField.vue'
import TableField from 'Forms/Fields/TableField/TableField.vue'

Vue.component('kirby-date-field', DateField);
Vue.component('kirby-tags-field', TagsField);
Vue.component('kirby-text-field', TextField);
Vue.component('kirby-textarea-field', TextareaField);
Vue.component('kirby-email-field', EmailField);
Vue.component('kirby-number-field', NumberField);
Vue.component('kirby-url-field', UrlField);
Vue.component('kirby-tel-field', TelField);
Vue.component('kirby-select-field', SelectField);
Vue.component('kirby-table-field', TableField);
