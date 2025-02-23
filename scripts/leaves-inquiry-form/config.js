/*
  WARNING: DO NOT MAKE CHANGES DIRECTLY IN THE GOOGLE APPS SCRIPT EDITOR.
  
  This project is managed through a GitHub repository. Any changes to the code 
  should be made in the repository, not directly in the Google Apps Script interface.
  
  GitHub Repository: https://github.com/marcobeles20/fsgc-leaves-tracker-and-inquiry
*/

const hr_contact_name = 'Angela';
const hr_contact_medium = 'Workplace Chat';

const email_sender_name = 'Five Story HR';

const leaves_tracker_spreadsheet_id = '1DXAy_SUTnTX_No1R42MPIBiBtRKuK5D4lR0cXvFLZhM';
const leaves_tracker_sheet_name = 'Leaves Tracker';
const leaves_tracker_start_row = 7;

const leaves_tracker_reference_date_cell = 'A2';

const leaves_tracker_columns = {
  'id_number':                            0,
  'work_email':                           1,
  'full_name':                            2,
  'entity':                               3,
  'employment_type':                      4,
  'start_date':                           5,
  'employment_status':                    6,
  'used_vacation_leaves':                 7,
  'used_personal_leaves':                 8,
  'used_sick_leaves':                     9,
  'used_birthday_leaves':                 10,
  'used_wellness_leaves_h1':              11,
  'used_wellness_leaves_h2':              12,
  'used_bereavement_leaves':              13,
  'used_promotion_leaves':                14,
  'used_half-day_offset_leaves':          15,
  'used_full-day_offset_leaves':          16,
  'used_maternity_leaves':                17,
  'used_paternity_leaves':                18,
  'used_leave_with_pay_for_vawc':         19,
  'used_parental_leave_for_solo_parents': 20, 
  'used_special_leave_for_women':         21,
  'total_used_leaves':                    22,
  'remaining_vacation_leaves':            23,
  'remaining_personal_leaves':            24,
  'remaining_sick_leaves':                25,
  'remaining_birthday_leaves':            26,
  'remaining_wellness_leaves_h1':         27,
  'remaining_wellness_leaves_h2':         28,
  'remaining_bereavement_leaves':         29,
  'total_remaining_leaves':               30
};

const leaves_inquiry_spreadsheet_id = '1V0P8b6BWJZQ4YZWmKSU-4LKu5wRscnVD3wIzAc4iy4A';
const leaves_inquiry_sheet_name = 'Form Responses 1';
const leaves_inquiry_start_row = 2;

const leaves_inquiry_form_id = '1NNgTrV6eCI2QoVDu6mhJBn9LSyXNz8yAxnERjVaQ_hA';

const leaves_inquiry_form_name = 'FSGC Leaves Inquiry'
const leaves_inquiry_form_link = 'https://forms.gle/coFFhge7rFuLVfCs5';

const leaves_inquiry_columns = {
  'timestamp':      0,
  'email_address':  1
};

const leaves_inquiry_form_response_trigger = "leaves_inquiry_form_response";

const developer_mode = false;
const developer_email = '56762146+marcobeles20@users.noreply.github.com';
const developer_mode_work_email = 'angela@fivestorygroup.com';