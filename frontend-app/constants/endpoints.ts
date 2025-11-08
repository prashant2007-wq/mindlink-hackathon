// Base URL for backend API
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Auth Endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  GOOGLE_LOGIN: `${API_BASE_URL}/auth/google`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  RESET_PASSWORD_REQUEST: `${API_BASE_URL}/auth/reset-password/request`,
  RESET_PASSWORD_CONFIRM: `${API_BASE_URL}/auth/reset-password/confirm`,
  REFRESH_TOKEN: `${API_BASE_URL}/auth/refresh-token`,
};
export const USER_ENDPOINTS = {
  PROFILE: `${API_BASE_URL}/user/profile`,
  UPDATE_PROFILE: `${API_BASE_URL}/user/update`,
};
export const WELLNESS_ENDPOINTS = {
  COUNSELORS: `${API_BASE_URL}/wellness/counselors`,
  AVAILABLE_SLOTS: (counselorId: string) => `${API_BASE_URL}/wellness/${counselorId}/slots`,
  BOOK_SESSION: `${API_BASE_URL}/wellness/book`,
  CANCEL_SESSION: (sessionId: string) => `${API_BASE_URL}/wellness/session/${sessionId}/cancel`,
  RESCHEDULE_SESSION: (sessionId: string) => `${API_BASE_URL}/wellness/session/${sessionId}/reschedule`,
  MY_SESSIONS: `${API_BASE_URL}/wellness/my-sessions`,
};
export const ERP_ENDPOINTS = {
  ATTENDANCE: `${API_BASE_URL}/erp/attendance`,
  CLUBS: `${API_BASE_URL}/erp/clubs`,
};
export const LMS_ENDPOINTS = {
  DASHBOARD: `${API_BASE_URL}/lms/dashboard`,
  CALENDAR: `${API_BASE_URL}/lms/calendar`,
};
