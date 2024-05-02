const leave_request_spreadsheet_id = '********************************************';
const leave_request_sheet_name = 'Form Responses 1';
const leave_request_start_row = 2;

const leave_request_form_id = '********************************************';

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
  'certification_true':                 9,
  'employment_type_at_submission':      10,
  'confirmed_by_hr':                    11,
  'year':                               12,
  'semiannual_period':                  13,
  'work_days_affected':                 14
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
