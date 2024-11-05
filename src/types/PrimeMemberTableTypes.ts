export interface Member {
    id: number;
    guid: string;
    first_name: string | null;
    last_name: string | null;
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
    expires_at:string
  }