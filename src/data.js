import {FaIoxhost, FaUserPlus, FaMoneyBillAlt, FaFileVideo, FaSitemap, FaMapSigns, FaCreditCard, FaRegMap, FaCalendarCheck, FaRss, FaList, FaBullhorn} from 'react-icons/fa'
import {HiVideoCamera} from 'react-icons/hi'
import {IoLogoUsd} from 'react-icons/io'
import {GoMortarBoard} from 'react-icons/go'
export const navbarLinks= [
    { 
        id: 1, 
        title: 'Front Office', 
        url: '/', 
        icon: <FaIoxhost/>,
        subLinks:[
            { id: 11, sublinkTitle: 'Admission Enquiry', url: '/'},
            { id: 12, sublinkTitle: 'Visitor Book', url: '/'},
            { id: 13, sublinkTitle: 'Phone Call Log', url: '/'},
            { id: 14, sublinkTitle: 'Postal Dispatch', url: '/'},
            { id: 15, sublinkTitle: 'Postal Recieve', url: '/'},
            { id: 16, sublinkTitle: 'Complain', url: '/'},
            { id: 17, sublinkTitle: 'Setup Front Office', url: '/'},
        ]
    },
    { 
        id: 2, 
        title: 'Student Information', 
        url: '/', 
        icon: <FaUserPlus/>,
        subLinks:[
            { id: 21, sublinkTitle: 'Student Details', url: '/'},
            { id: 22, sublinkTitle: 'Student Admission', url: '/'},
            { id: 23, sublinkTitle: 'Online Admission', url: '/'},
            { id: 24, sublinkTitle: 'Disabled Students', url: '/'},
            { id: 25, sublinkTitle: 'Multi Class Student', url: '/'},
            { id: 26, sublinkTitle: 'Bulk Delete', url: '/'},
            { id: 28, sublinkTitle: 'Student Categories', url: '/'},
            { id: 29, sublinkTitle: 'Student House', url: '/'},
            { id: 210, sublinkTitle: 'Disable Reason', url: '/'},

        ]
    },
    { 
        id: 3, 
        title: 'Fees Collection', 
        url: '/', 
        icon: <FaMoneyBillAlt/>,
        subLinks:[
            { id: 31, sublinkTitle: 'Collect Fees', url: '/'},
            { id: 32, sublinkTitle: 'Online Bank Payments', url: '/'},
            { id: 33, sublinkTitle: 'Search Fees Payment', url: '/'},
            { id: 34, sublinkTitle: 'Search Due Fees', url: '/'},
            { id: 35, sublinkTitle: 'Fees Master', url: '/'},
            { id: 36, sublinkTitle: 'Fees Group', url: '/'},
            { id: 37, sublinkTitle: 'Fees Type', url: '/'},
            { id: 38, sublinkTitle: 'Fees Discount', url: '/'},
            { id: 39, sublinkTitle: 'Fees Carry Forward', url: '/'},
            { id: 310, sublinkTitle: 'Fees Reminder', url: '/'},

        ]
    },
    { 
        id: 4, 
        title: 'Online Course', 
        url: '/', 
        icon: <FaFileVideo/>,
        subLinks:[
            { id: 41, sublinkTitle: 'Online Course', url: '/'},
            { id: 42, sublinkTitle: 'Offline Payment', url: '/'},
            { id: 43, sublinkTitle: 'Course Category', url: '/'},
            { id: 44, sublinkTitle: 'Online Course Report', url: '/'},
            { id: 45, sublinkTitle: 'Setting', url: '/'},
        ]
    },
    { 
        id: 5, 
        title: 'Multi Branch', 
        url: '/', 
        icon: <FaSitemap/>,
        subLinks:[
            { id: 51, sublinkTitle: 'Overview', url: '/'},
            { id: 52, sublinkTitle: 'Report', url: '/'},
            { id: 53, sublinkTitle: 'Setting', url: '/'},
        ]
    },
    { 
        id: 6, 
        title: 'Gmeet Live Classes', 
        url: '/', 
        icon: <HiVideoCamera/>,
        subLinks:[
            { id: 61, sublinkTitle: 'Live Classes', url: '/'},
            { id: 62, sublinkTitle: 'Live Meeting', url: '/'},
            { id: 63, sublinkTitle: 'Live Class Report', url: '/'},
            { id: 64, sublinkTitle: 'Setting', url: '/'},
            { id: 65, sublinkTitle: 'Live Meeting Report', url: '/'}, ]
    },
    { 
        id: 7, 
        title: 'Zoom Live Classes', 
        url: '/', 
        icon: <HiVideoCamera/>,
        subLinks:[
            { id: 71, sublinkTitle: 'Live Classes', url: '/'},
            { id: 72, sublinkTitle: 'Live Meeting', url: '/'},
            { id: 73, sublinkTitle: 'Live Class Report', url: '/'},
            { id: 74, sublinkTitle: 'Setting', url: '/'},
            { id: 75, sublinkTitle: 'Live Meeting Report', url: '/'}, ]
    },
    { 
        id: 8, 
        title: 'Behaviour Records', 
        url: '/', 
        icon: <FaMapSigns/>,
        subLinks:[
            { id: 81, sublinkTitle: 'Assign Incident', url: '/'},
            { id: 82, sublinkTitle: 'Incidents', url: '/'},
            { id: 83, sublinkTitle: 'Report', url: '/'},
            { id: 84, sublinkTitle: 'Setting', url: '/'}, ]
    },
    { 
        id: 9, 
        title: 'Income', 
        url: '/', 
        icon: <IoLogoUsd/>,
        subLinks:[
            { id: 91, sublinkTitle: 'Add Income', url: '/'},
            { id: 92, sublinkTitle: 'Search Income', url: '/'},
            { id: 93, sublinkTitle: 'Income Head', url: '/'}, ]
    },
    { 
        id: 10, 
        title: 'Expenses', 
        url: '/', 
        icon: <FaCreditCard/>,
        subLinks:[
            { id: 101, sublinkTitle: 'Add Expenses', url: '/'},
            { id: 102, sublinkTitle: 'Search Expenses', url: '/'},
            { id: 103, sublinkTitle: 'Expense Head', url: '/'}, ]
    },
    { 
        id: 11, 
        title: 'Examinations', 
        url: '/', 
        icon: <FaRegMap/>,
        subLinks:[
            { id: 111, sublinkTitle: 'Exam Group', url: '/'},
            { id: 112, sublinkTitle: 'Exam Schedule', url: '/'},
            { id: 113, sublinkTitle: 'Exam Result', url: '/'},
            { id: 114, sublinkTitle: 'Design Admit Card', url: '/'}, 
            { id: 115, sublinkTitle: 'Print Admit Card', url: '/'}, 
            { id: 116, sublinkTitle: 'Design Marksheet', url: '/'}, 
            { id: 117, sublinkTitle: 'Print Marksheet', url: '/'}, 
            { id: 118, sublinkTitle: 'Marks Grade', url: '/'}, 
            { id: 119, sublinkTitle: 'Marks Division', url: '/'}, 
        
        ]
    },
    { 
        id: 12, 
        title: 'Attendance', 
        url: '/', 
        icon: <FaCalendarCheck/>,
        subLinks:[
            { id: 121, sublinkTitle: 'Student Attendance', url: '/'},
            { id: 122, sublinkTitle: 'Approve Leave', url: '/'},
            { id: 123, sublinkTitle: 'Attendance By Date', url: '/'}, 
        ]
    },
    { 
        id: 13, 
        title: 'Online Examinations', 
        url: '/', 
        icon: <FaRss/>,
        subLinks:[
            { id: 131, sublinkTitle: 'Online Exam', url: '/'},
            { id: 132, sublinkTitle: 'Question Bank', url: '/'},
        
        ]
    },
    { 
        id: 14, 
        title: 'Academics', 
        url: '/', 
        icon: <GoMortarBoard/>,
        subLinks:[
            { id: 141, sublinkTitle: 'Class Timetable', url: '/'},
            { id: 142, sublinkTitle: 'Teachers Timetable', url: '/'},
            { id: 143, sublinkTitle: 'Assign Class Teachers', url: '/'},
            { id: 144, sublinkTitle: 'Promote Students', url: '/'},
            { id: 145, sublinkTitle: 'Subject Group', url: '/'},
            { id: 146, sublinkTitle: 'Subjects', url: '/'},
            { id: 147, sublinkTitle: 'Class', url: '/'},
            { id: 148, sublinkTitle: 'Sections', url: '/'},
        
        ]
    },
    { 
        id: 15, 
        title: 'Lesson Plan', 
        url: '/', 
        icon: <FaList/>,
        subLinks:[
            { id: 151, sublinkTitle: 'Copy Old Lessons', url: '/'},
            { id: 152, sublinkTitle: 'Manage Lesson Plans', url: '/'},
            { id: 153, sublinkTitle: 'Manage Syllabus Status', url: '/'},
            { id: 154, sublinkTitle: 'Lesson', url: '/'},
            { id: 155, sublinkTitle: 'Topic', url: '/'},
        
        ]
    },
    { 
        id: 16, 
        title: 'Human Resources', 
        url: '/', 
        icon: <FaSitemap/>,
        subLinks:[
            { id: 161, sublinkTitle: 'Staff Directory', url: '/'},
            { id: 162, sublinkTitle: 'Staff Attendance', url: '/'},
            { id: 163, sublinkTitle: 'Payroll', url: '/'},
            { id: 164, sublinkTitle: 'Approve Leave Request', url: '/'},
            { id: 165, sublinkTitle: 'Apply Leave', url: '/'},
            { id: 166, sublinkTitle: 'Leave Type', url: '/'},
            { id: 167, sublinkTitle: 'Teachers Rating', url: '/'},
            { id: 168, sublinkTitle: 'Department', url: '/'},
            { id: 169, sublinkTitle: 'Designation', url: '/'},
            { id: 1610, sublinkTitle: 'Disabled Staff', url: '/'},
        
        ]
    },
    { 
        id: 17, 
        title: 'Communicate', 
        url: '/', 
        icon: <FaBullhorn/>,
        subLinks:[
            { id: 171, sublinkTitle: 'Notice Board', url: '/'},
            { id: 172, sublinkTitle: 'Send Email', url: '/'},
            { id: 173, sublinkTitle: 'Send SMS', url: '/'},
            { id: 174, sublinkTitle: 'Email/SMS Log', url: '/'},
            { id: 175, sublinkTitle: 'Schedule Email/SMS Log', url: '/'},
            { id: 176, sublinkTitle: 'Login Credentials Send', url: '/'},
            { id: 177, sublinkTitle: 'Email Template', url: '/'},
            { id: 178, sublinkTitle: 'SMS Template', url: '/'},
        
        ]
    },{ 
        id: 18, 
        title: 'Download Center', 
        url: '/', 
        icon: <FaSitemap/>,
        subLinks:[
            { id: 161, sublinkTitle: 'Staff Directory', url: '/'},
            { id: 162, sublinkTitle: 'Staff Attendance', url: '/'},
            { id: 163, sublinkTitle: 'Payroll', url: '/'},
            { id: 164, sublinkTitle: 'Approve Leave Request', url: '/'},
            { id: 165, sublinkTitle: 'Apply Leave', url: '/'},
            { id: 166, sublinkTitle: 'Leave Type', url: '/'},
            { id: 167, sublinkTitle: 'Teachers Rating', url: '/'},
            { id: 168, sublinkTitle: 'Department', url: '/'},
            { id: 169, sublinkTitle: 'Designation', url: '/'},
            { id: 1610, sublinkTitle: 'Disabled Staff', url: '/'},
        
        ]
    },
    
]