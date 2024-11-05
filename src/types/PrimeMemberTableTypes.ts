export interface Member {
    id: number;
    guid: string;
    first_name: string ;
    last_name: string ;
    middle_name: string | null;
    gender: string | null;
    dob: string | null;
    country_code: string;
    mobile: string;
    alt_mobile: string | null;
    email: string | null;
    user_type: string;
    profile_pic: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    isMember: string;
    expires_at:string;
    start_at:string;
    total_rewards:string | number;
  }


  // Types of SingleMemberDetails
  export interface MemberDetails {
    id: number;
    guid: string;
    first_name: string;
    last_name: string;
    middle_name: string;
    gender: 'Male' | 'Female' | 'Other'; 
    dob: string; 
    country_code: string;
    mobile: string;
    alt_mobile: string;
    email: string; 
    user_type: 'Customer' | 'Admin' | 'Guest';
    profile_pic: string; 
    updated_at: string; 
    created_at: string; 
    deleted_at: string | null; 
    Guid: string;
    customer_id: string;
    total_rewards: number;
    rewards_used: number;
    reverted_rewards: number;
    spent_amount: number;
    membership_end_date:string | number;
    membership_start_date:string | number;
    membership_status:boolean
}