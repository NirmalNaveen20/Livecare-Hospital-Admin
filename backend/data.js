import bcrypt from 'bcryptjs'

const data = {
    admins: [
        {
            adminId: "LHC459012",
            adminName: "Mr Kamal Perera",
            adminPassword: bcrypt.hashSync('kamal123'),
            adminIs: true
        }, {
            adminId: "LHC459095",
            adminName: "Mr Harsha Madusanka",
            adminPassword: bcrypt.hashSync('harsha123'),
            adminIs: true
        }, {
            adminId: "LHC505095",
            adminName: "Ms Ashani Perera",
            adminPassword: bcrypt.hashSync('ashani123'),
            adminIs: true
        }
    ],
    users: [
        {
            userId: "DC65328",
            firstName: "Nipuna",
            lastName: "Munasignhe",
            email: "nipuna@doc.livecare.lk",
            mobile: "+94719852569",
            role: "Clinical",
            roleType: "Doctor",
            password: bcrypt.hashSync('nipuna')
        },
        {
            userId: "DC65329",
            firstName: "Harsha",
            lastName: "Subasighne",
            email: "harsha@doc.livecare.lk",
            mobile: "+9473262569",
            role: "Emergency Medicine",
            roleType: "Doctor",
            password: bcrypt.hashSync('harsha')
        },
        {
            userId: "DC65324",
            firstName: "Ashani",
            lastName: "Peries",
            email: "ashani@doc.livecare.lk",
            mobile: "+94714565469",
            role: "Emergency Medicine",
            roleType: "Doctor",
            password: bcrypt.hashSync('ashani')
        },
        {
            userId: "PC98653",
            firstName: "Tharushi",
            lastName: "Medavi",
            email: "tharu@gmail.com",
            mobile: "+94714326569",
            role: "Normal User",
            roleType: "Patient",
            password: bcrypt.hashSync('tharushi')
        },
        {
            userId: "PC96545",
            firstName: "Kamal",
            lastName: "Perera",
            email: "deep@gmail.com",
            mobile: "+94719852569",
            role: "Normal User",
            roleType: "Patient",
            password: bcrypt.hashSync('kamal')
        },
        {
            userId: "FC90653",
            firstName: "Janith",
            lastName: "Iddamalgoda",
            email: "ana@gmail.com",
            mobile: "+94714552569",
            role: "Accountant",
            roleType: "Finance",
            password: bcrypt.hashSync('janith')
        },
        {
            userId: "FC90655",
            firstName: "Hasini",
            lastName: " Perera",
            email: "hasini@fin.livecare.com",
            mobile: "+94714565469",
            role: "Management",
            roleType: "Finance",
            password: bcrypt.hashSync('hasini')
        }
    ],
    department: [
        {
            departmentName: "Emergency Branch Malabe",
            departmentHead: "C. Wicramasignhe",
            totalEmployee: 150,
        },
        {
            departmentName: "Main Branch Chilaw",
            departmentHead: "W.C Perera",
            totalEmployee: 250,
        },
        {
            departmentName: "Customer Care Branch Matara",
            departmentHead: "A.M.N Anjali",
            totalEmployee: 120,
        },
    ],
    employee: [
        {
            employeeId: "LD453212",
            firstName: "Pathum",
            lastName: "Perera",
            specialization: "Emergency Medicine",
            address: "Negombo",
            email: "pathum@doc.livecare.lk",
            phone: "+9478652",
            availability: "Available"
        },
        {
            employeeId: "LD454573",
            firstName: "Janith",
            lastName: "Silva",
            specialization: "Anesthesiology",
            address: "Nattandiya",
            email: "test@gmail.com",
            phone: "+94784532",
            availability: "Available"
        },
    ],
    activity: [
        {
            title: "Title One",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia praesentium dolores! Consequuntur similique iusto quam quae perspiciatis doloribus exercitationem voluptas, saepe voluptatibus nulla quisquam sunt explicabo fuga dignissimos sapiente. Amet, magni suscipit. Ab, consectetur ratione. Culpa error modi a neque, id beatae esse aperiam necessitatibus voluptas veniam hic dolor quidem rerum voluptates numquam impedit praesentium reiciendis quam provident qui.",
            author: "Ricpe",
        },
        {
            title: "Title Two",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia praesentium dolores! Consequuntur similique iusto quam quae perspiciatis doloribus exercitationem voluptas, saepe voluptatibus nulla quisquam sunt explicabo fuga dignissimos sapiente. Amet, magni suscipit. Ab, consectetur ratione. Culpa error modi a neque, id beatae esse aperiam necessitatibus voluptas veniam hic dolor quidem rerum voluptates numquam impedit praesentium reiciendis quam provident qui.",
            author: "Ricpe",
        },
    ],
    holidays: [
        {
            day: "Sunday",
            date: "01.01.2023",
            holiday: "New Year"
        }, 
        {
            day: "Saturday",
            date: "07.01.2023",
            holiday: "Christmas"
        }, 
        {
            day: "Wednesday",
            date: "15.02.2023",
            holiday: "National Day"
        }, 
        {
            day: "Friday",
            date: "14.04.2023",
            holiday: "Great Friday"
        }, 
        {
            day: "Sunday",
            date: "16.04.2023",
            holiday: "Easter"
        }, 
        {
            day: "Monday",
            date: "17.04.2023",
            holiday: "Easter Monday"
        }, 
        {
            day: "Monday",
            date: "01.05.2023",
            holiday: "Labor Day"
        }, 
        {
            day: "Saturday",
            date: "11.11.2023",
            holiday: "Armistice Day in the First World War"
        }, 
    ],
    accounts: [
        {
            invoiceNo: "ricpe-3242",
            clients: "Google",
            type: "VISA",
            amount: "Rs 4500"
        },
        {
            invoiceNo: "ricpe-55844",
            clients: "BT Technology",
            type: "PayPal",
            status: true,
            amount: "Rs 150000"
        },
    ],
    events: [
        {
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            summary: 'test',
            color: 'blue',
        },
        {
            startAt: '2021-11-21T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            summary: 'test',
            color: 'blue'
        }
        ,
        {
            startAt: '2022-09-25T18:00:00.000Z',
            endAt: '2022-10-20T19:00:00.000Z',
            timezoneStartAt: 'Europe/Berlin', // optional
            summary: 'We are starting work for a client from America',
            color: 'red'
        }
        ,
        {
            startAt: '2022-10-25T18:00:00.000Z',
            endAt: '2022-10-27T19:00:00.000Z',
            summary: 'Test',
            color: 'green'
        }
    ],
    projects: [
        {
            clientName: "Gabby George",
            project: "Admin Panel",
            projectCost: 800,
            payment: "Done",
            status: "Delivered"
        },
        {
            clientName: "Aiden Lloyd",
            project: "One Page For Portfolio",
            projectCost: 500,
        },
        {
            clientName: "Jaden Collins",
            project: "WebSite for Caffee",
            projectCost: 900,
        }
    ],
    salaryChart: [
        {
            label: 'Income',
            data: [3430, 4302, 2345, 4330, 4322, 2990, 1890],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Expense',
            data: [2500, 4302, 1900, 2654, 5434, 4564, 2200],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'January',
            salaryIncome: 3430,
            salaryExpense: 2500
        },
        {
            label: 'February',
            salaryIncome: 4302,
            salaryExpense: 4302
        },
        {
            label: 'March',
            salaryIncome: 2345,
            salaryExpense: 1900
        },
        {
            label: 'April',
            salaryIncome: 4330,
            salaryExpense: 2654
        },
        {
            label: 'May',
            salaryIncome: 4322,
            salaryExpense: 5434
        },
        {
            label: 'June',
            salaryIncome: 2990,
            salaryExpense: 4564
        },
        {
            label: 'July',
            salaryIncome: 1890,
            salaryExpense: 2200
        },
    ]
}

export default data;