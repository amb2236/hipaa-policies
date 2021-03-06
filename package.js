Package.describe({
  name: 'clinical:hipaa-policies',
  version: '0.1.2',
  summary: 'HIPAA Policies and Procedures for Clinical Meteor Apps.  ',
  git: 'https://github.com/awatson1978/clinical-hipaa-policies',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('meteor-platform');
  api.use('less');
  api.use('perak:markdown@1.0.5');

  api.addFiles('lib/hipaa.js');
  api.addFiles('lib/client-helpers.js', 'client');

  api.addFiles('hipaa-policies.less');

  api.addFiles('policyTemplates/3rd_party_policy.html');
  api.addFiles('policyTemplates/approved_tools_policy.html');
  api.addFiles('policyTemplates/auditing_policy.html');
  api.addFiles('policyTemplates/breach_policy.html');
  api.addFiles('policyTemplates/configuration_management_policy.html');
  api.addFiles('policyTemplates/data_integrity_policy.html');
  api.addFiles('policyTemplates/data_management_policy.html');
  api.addFiles('policyTemplates/data_retention_policy.html');
  api.addFiles('policyTemplates/disaster_recovery_policy.html');
  api.addFiles('policyTemplates/disposable_media_policy.html');
  api.addFiles('policyTemplates/employees_policy.html');
  api.addFiles('policyTemplates/facility_access_policy.html');
  api.addFiles('policyTemplates/hipaa_business_associate_agreement.html');
  api.addFiles('policyTemplates/hipaa_inheritance_for_paas_customers.html');
  api.addFiles('policyTemplates/hipaa_inheritance_for_platform_addon_customers.html');
  api.addFiles('policyTemplates/hipaa_mapping_to_business_controls.html');
  api.addFiles('policyTemplates/intrusion_detection_policy.html');
  api.addFiles('policyTemplates/incident_response_policy.html');
  api.addFiles('policyTemplates/key_definitions.html');
  api.addFiles('policyTemplates/policy_management_policy.html');
  api.addFiles('policyTemplates/risk_management_policy.html');
  api.addFiles('policyTemplates/roles_policy.html');
  api.addFiles('policyTemplates/systems_access_policy.html');
  api.addFiles('policyTemplates/vulnerability_scanning_policy.html');

  api.export('thirdPartyPolicy');
  api.export('approvedToolsPolicy');
  api.export('auditingPolicy');
  api.export('breachPolicy');
  api.export('configurationManagementPolicy');
  api.export('dataIntegrityPolicy');
  api.export('dataManagementPolicy');
  api.export('dataRetentionPolicy');
  api.export('disasterRecoveryPolicy');
  api.export('disposableMediaPolicy');
  api.export('employeesPolicy');
  api.export('facilityAccessPolicy');
  api.export('hipaaBusinessAssociateAgreement');
  api.export('hipaaInheritanceForPaasCustomers');
  api.export('hipaaInheritanceForPlatformAddOnCustomers');
  api.export('hipaaMappingToBusinessControls');
  api.export('intrusionDetectionPolicy');
  api.export('incidentResponsePolicy');
  api.export('keyDefinitions');
  api.export('policyManagementPolicy');
  api.export('riskManagementPolicy');
  api.export('rolesPolicy');
  api.export('systemAccessPolicy');
  api.export('vulnerabilityScanningPolicy');

});
