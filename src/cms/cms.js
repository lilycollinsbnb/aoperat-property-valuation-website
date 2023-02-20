import CMS from 'netlify-cms-app'

import TermsAndConditionsPagePreview from './preview-templates/terms-and-conditions-page-preview'
import PrivacyPolicyPagePreview from './preview-templates/privacy-policy-page-preview'
import AboutPagePreview from './preview-templates/about-page-template-preview'
import ServicesPagePreview from './preview-templates/services-page-template-preview'
import IndexPagePreview from './preview-templates/index-page-preview'
import PostPreview from './preview-templates/post-preview'


CMS.registerPreviewTemplate('terms-and-conditions', TermsAndConditionsPagePreview)
CMS.registerPreviewTemplate('privacy-policy', PrivacyPolicyPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('home', IndexPagePreview)
CMS.registerPreviewTemplate('posts', PostPreview )