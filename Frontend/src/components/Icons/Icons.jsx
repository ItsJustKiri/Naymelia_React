import * as React from "react";

/* Navigation */
const HomeIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    </svg>
);

export const StoreIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path>
        <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path>
    </svg>
);

export const StarsIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4M22 4h-4"></path>
        <circle cx="4" cy="20" r="2"></circle>
    </svg>
);

export const SearchIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="m21 21-4.34-4.34"></path>
        <circle cx="11" cy="11" r="8"></circle>
    </svg>
);

/*Contact Us*/
export const MapIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

export const EmailIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
    </svg>
);

export const WsIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <g
            id="SVGRepo_iconCarrier"
            fill="currentColor">
            <path d="M6.014 8.006c.114-.904 1.289-2.132 2.22-1.996V6.01c.907.172 1.625 1.734 2.03 2.436.286.509.1 1.025-.167 1.243-.361.29-.926.692-.808 1.095C9.5 11.5 12 14 13.23 14.711c.466.269.804-.44 1.092-.804.21-.28.726-.447 1.234-.171.759.442 1.474.956 2.135 1.534.33.276.408.684.179 1.115-.403.76-1.569 1.76-2.415 1.557C13.976 17.587 8 15.27 6.08 8.558c-.108-.318-.08-.438-.066-.552"></path>
            <path
                fillRule="evenodd"
                d="M12 23c-1.224 0-1.9-.131-3-.5l-2.106 1.053A2 2 0 0 1 4 21.763V19.5c-2.153-2.008-3-4.323-3-7.5C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11m-6-4.37-.636-.593C3.691 16.477 3 14.733 3 12a9 9 0 1 1 9 9c-.986 0-1.448-.089-2.364-.396l-.788-.264L6 21.764z"
                clipRule="evenodd"
            ></path>
        </g>
    </svg>
);

export const InstagramIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37M17.5 6.5h.01"></path>
    </svg>
);

export const FacebookIcon = ({ className, ...props }) => (
    <svg
        fill="currentColor"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

export const TiktokIcon = ({ className, ...props }) => (
    <svg 
        fill="currentColor"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 32 32"
        className={className}
        {...props}
    >
        <g id="SVGRepo_iconCarrier">
            <path d="M16.656 1.029c1.637-.025 3.262-.012 4.886-.025a7.76 7.76 0 0 0 2.189 5.213l-.002-.002A8.77 8.77 0 0 0 29 8.45l.028.002v5.036a13.3 13.3 0 0 1-5.331-1.247l.082.034a15.4 15.4 0 0 1-2.077-1.196l.052.034c-.012 3.649.012 7.298-.025 10.934a9.5 9.5 0 0 1-1.707 4.954l.02-.031c-1.652 2.366-4.328 3.919-7.371 4.011h-.014a9.071 9.071 0 0 1-5.139-1.31l.04.023C5.05 28.185 3.32 25.603 3 22.6l-.004-.041a23 23 0 0 1-.012-1.862c.49-4.779 4.494-8.476 9.361-8.476q.822.001 1.604.136l-.056-.008c.025 1.849-.05 3.699-.05 5.548a4.29 4.29 0 0 0-5.465 2.619l-.009.03c-.133.427-.21.918-.21 1.426q0 .31.037.61l-.002-.024a4.26 4.26 0 0 0 4.382 3.586h-.009a4.2 4.2 0 0 0 3.451-1.994l.01-.018c.267-.372.45-.822.511-1.311l.001-.014c.125-2.237.075-4.461.087-6.698.012-5.036-.012-10.06.025-15.083z"></path>
        </g>
    </svg>
);

/* Heart */
export const HearthIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
    </svg>
);

export const HearthFillIcon = ({ className, ...props }) => (
    <svg
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
    </svg>
);

/* Star */
export const StarIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
    </svg>
);

export const StarFillIcon = ({ className, ...props }) => (
    <svg
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
    </svg>
);

/* Others */
export const CalendarDaysIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M8 2v4M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path>
    </svg>
);

export const CalendarIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <path d="M8 2v4M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
    </svg>
);

export const InfoIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4M12 8h.01"></path>
    </svg>
);

export const CarIcon = ({ className, ...props }) => (
    <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className={className}
        {...props}
    >
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
    </svg>
);