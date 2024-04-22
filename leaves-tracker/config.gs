const employee_mastersheet_spreadsheet_id = 'CHANGEME';
const employee_mastersheet_sheet_name = 'CHANGEME';
const employee_mastersheet_start_row = 3;

const employee_mastersheet_columns = {
  'id_number':                  0,
  'work_email':                 1,
  'full_name':                  2,
  'first_name':                 3,
  'middle_name':                4,
  'last_name':                  5,
  'nickname':                   6,
  'sex':                        7,
  'gender':                     8,
  'pronouns':                   9,
  'birthday':                   10,
  'age':                        11,
  'mobile_number':              12,
  'present_address':            13,
  'permanent_address':          14,
  'personal_email':             15,
  'contact_name':               16,
  'contact_relationship':       17,
  'contact_cellphone_number':   18,
  'contact_email':              19,
  'blood_type':                 20,
  'allergies':                  21,
  'medical_conditions':         22,
  'entity':                     23,
  'employment_type':            24,
  'position':                   25,
  'level':                      26,
  'manager':                    27,
  'department':                 28,
  'start_date':                 29,
  '1st_month':                  30,
  '3rd_month':                  31,
  '5th_month':                  32,
  'regularized_date':           33,
  'promotion_date':             34,
  'end_date':                   35,
  'employment_agreement_link':  36,
  'bank_name':                  37,
  'bank_account_name':          38,
  'bank_account_number':        39,
  'bir_tin_number':             40,
  'sss_number':                 41,
  'philhealth_number':          42,
  'pag_ibig_number':            43,
  'id_link':                    44
};

const leave_request_spreadsheet_id = 'CHANGEME';
const leave_request_sheet_name = 'Form Responses 1';
const leave_request_start_row = 2;

const leave_request_form_id = 'CHANGEME';

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
  'semiannual_period':                  12,
  'work_days_affected':                 13,
};

const leaves_tracker_spreadsheet_id = leave_request_spreadsheet_id;
const leaves_tracker_sheet_name = 'Leaves Tracker';
const leaves_tracker_start_row = 7;

const leaves_tracker_columns = {
  'id_number':                            0,
  'work_email':                           1,
  'full_name':                            2,
  'employment_type':                      3,
  'start_date':                           4,
  'tenure':                               5,
  'used_vacation_leaves_year':            6,
  'used_vacation_leaves_h1':              7,
  'used_vacation_leaves_h2':              8,
  'used_sick_leaves':                     9,
  'used_birthday_leaves':                 10,
  'used_mental_health_leaves':            11,
  'used_offset_leaves':                   12,
  'used_maternity_leaves':                13,
  'used_paternity_leaves':                14,
  'used_bereavement_leaves':              15,
  'used_leave_with_pay_for_vawc':         16,
  'used_parental_leave_for_solo_parents': 17, 
  'used_special_leave_for_women':         18,
  'total_used_leaves':                    19,
  'remaining_vacation_leaves_year':       20,
  'remaining_vacation_leaves_h1':         21,
  'remaining_vacation_leaves_h2':         22,
  'remaining_sick_leaves':                23,
  'remaining_birthday_leaves':            24,
  'remaining_mental_health_leaves':       25,
  'total_remaining_leaves':               26
};

const holidays_sheet_name_suffix = 'Holidays';
const holidays_start_row = 2;

const holidays_columns = {
  'name': 0,
  'date': 1
}

const daily_actions_trigger = 'daily_actions';
const leave_request_form_response_trigger = 'leave_request_form_response';
