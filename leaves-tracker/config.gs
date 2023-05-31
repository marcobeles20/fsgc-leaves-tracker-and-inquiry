const hr_mastersheet_spreadsheet_id = 'CHANGEME';
const hr_mastersheet_start_row = 3;

const hr_mastersheet_columns = {
  'id_number':                  0,
  'work_email':                 1,
  'first_name':                 2,
  'middle_name':                3,
  'last_name':                  4,
  'sex':                        5,
  'gender':                     6,
  'pronouns':                   7,
  'birthday':                   8,
  'cellphone_number':           9,
  'present_address':            10,
  'permanent_address':          11,
  'personal_email':             12,
  'contact_name':               13,
  'contact_relationship':       14,
  'contact_cellphone_number':   15,
  'contact_email':              16,
  'blood_type':                 17,
  'allergies':                  18,
  'medical_conditions':         19,
  'entity':                     20,
  'employment_type':            21,
  'position':                   22,
  'start_date':                 23,
  'end_date':                   24,
  'employment_agreement_link':  25,
  'bank_name':                  26,
  'bank_account_name':          27,
  'bank_account_number':        28,
  'bir_tin_number':             29,
  'sss_number':                 30,
  'philhealth_number':          31,
  'pag_ibig_number':            32,
  'id_link':                    33
};

const hr_mastersheet_excluded_sheets = [
  '***-*****', 
  'Reg Alerts', 
  'Resigned'
];

const leave_request_form_id = 'CHANGEME';

const leave_request_spreadsheet_id = 'CHANGEME';
const leave_request_sheet_name = 'CHANGEME';
const leave_request_start_row = 2;

const leave_request_columns = {
  'timestamp':                          0,
  'email_address':                      1,
  'full_name':                          2,
  'entity':                             3,
  'start_leave_date':                   4,
  'end_leave_date':                     5,
  'leave_type':                         6,
  'leave_reason':                       7,
  'manager_approval_screenshot_link':   8,
  'employment_type_at_submission':      9,
  'confirmed_by_hr':                    10,
  'year':                               11,
  'work_days_affected':                 12,
};

const leaves_tracker_spreadsheet_id = 'CHANGEME';
const leaves_tracker_sheet_name = 'CHANGEME';
const leaves_tracker_start_row = 3;

const leaves_tracker_columns = {
  'id_number':                        0,
  'work_email':                       1,
  'first_name':                       2,
  'middle_name':                      3,
  'last_name':                        4,
  'employment_type':                  5,
  'start_date':                       6,
  'used_vacation_leaves':             7,
  'used_sick_leaves':                 8,
  'used_mental_health_leaves':        9,
  'used_birthday_leaves':             10,
  'used_offset_leaves':               11,
  'used_maternity_leaves':            12,
  'used_paternity_leaves':            13,
  'total_used_leaves':                14,
  'remaining_vacation_leaves':        15,
  'remaining_sick_leaves':            16,
  'remaining_mental_health_leaves':   17,
  'remaining_birthday_leaves':        18,
  'total_remaining_leaves':           19
};

const holidays_columns = {
  'name': 0,
  'date': 1
}
