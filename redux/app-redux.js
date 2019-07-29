import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {

    categories: [
        {
            id: 0,
            title: 'PUBLIC SERVICES',
            img: require('../src/Home/assets/public.png'),
            color: '#823BCA',
            moreCategories: [

            ]

        },

        {
            id: 1,
            title: 'CIVIL PROTECTION',
            img: require('../src/Home/assets/civil.png'),
            color: '#5C3BCA'
        },


        {
            id: 2,
            title: 'ENVIROMENT',
            img: require('../src/Home/assets/enviroment.png'),
            color: '#443BCA'
        },

        {
            id: 3,
            title: 'HEALTH',
            img: require('../src/Home/assets/health.png'),
            color: '#CA3B91'
        },

        {
            id: 4,
            title: 'RELIGION MINORITIES',
            img: require('../src/Home/assets/religion.png'),
            color: '#3B70CA'
        },

        {
            id: 5,
            title: 'EDUCATION',
            img: require('../src/Home/assets/education.png'),
            color: '#CA3B3B',
            moreCategories: [

                {
                    id: 0,
                    title: 'PRE-SCHOOL',
                    count: 54,
                    conversation: [

                        {
                            id: 0,
                            user: {
                                icon: require('../src/Home/assets/users/aleksa.png'),
                                name: 'ALEKSA MATIC',
                                timestamp: '58d',
                                problem: 'More opportunities for the people with mental health problems'

                            },


                        },

                        {
                            id: 1,
                            user: {
                                icon: require('../src/Home/assets/users/sandra.png'),
                                name: 'SANDRA STOJANOVSKA',
                                timestamp: '32d',
                                problem: 'Scholarship for the students from the rural areas '
                            }

                        },

                        {
                            id: 2,
                            user: {
                                icon: require('../src/Home/assets/users/ajdin.png'),
                                name: 'AJDIN AMHETOVIĆ',
                                timestamp: '2w',
                                problem: 'Amaount of the monthly fee is not enough to cover life ...'
                            }

                        },




                        {
                            id: 3,
                            user: {
                                icon: require('../src/Home/assets/users/marko.png'),
                                name: 'MARKO VUČUROVIĆ',
                                timestamp: '1d',
                                problem: 'The priority should be given to the students without parent ...'
                            }

                        },

                        {
                            id: 4,
                            user: {
                                icon: require('../src/Home/assets/users/emmett.png'),
                                name: 'EMMETT CLARKSON',
                                timestamp: '3h',
                                problem: 'Scholarships on European leve - well done!'
                            }

                        },





                    ]
                },

                {
                    id: 1,
                    title: 'PIMARY SCHOOL',
                    count: 17,

                },

                {
                    id: 2,
                    title: 'HIGH SCHOOL',
                    count: 72,

                },

                {
                    id: 3,
                    title: 'UNIVERSITY',
                    count: 93,

                },

                {
                    id: 4,
                    title: 'SCHOLARSHIPS',
                    count: 152,

                },
            ]
        },

        {
            id: 6,
            title: 'SPORT',
            img: require('../src/Home/assets/sport.png'),
            color: '#823BCA'
        },

        {
            id: 7,
            title: 'CULTURE',
            img: require('../src/Home/assets/culture.png'),
            color: '#5C3BCA'
        },

        {
            id: 8,
            title: 'TRANSPORT',
            img: require('../src/Home/assets/transport.png'),
            color: '#362C94'
        },

        {
            id: 9,
            title: 'YOUTH',
            img: require('../src/Home/assets/youth.png'),
            color: '#CA3B91'
        },

        {
            id: 9,
            title: 'NGO\'S',
            img: require('../src/Home/assets/ngos.png'),
            color: '#CA3B3B'
        },
    ],

    openApplications: {
        title: 'OPEN APPLICATION',
     data: [

        {
            id: 0,
            img: require('../src/Opportuinities/assets/img2.png'),
            title: '3D AKADEMIJA',
            category: 'EDUCATION',
        },

        {
            id: 0,
            img: require('../src/Opportuinities/assets/img5.png'),
            title: 'BE PART OF CULTURE',
            category: 'CULTURE',

        },


    ]},

    onGoing: {
        title: 'ON GOING ACTIVITIES',
        data: [

            {
                id: 0,
                img: require('../src/Opportuinities/assets/img3.png'),
                title: 'BE THE LIGHT',
                category: 'PUBLIC SERVICES',

            },


            {
                id: 1,
                img: require('../src/Opportuinities/assets/img1.png'),
                title: 'FRIDAYS FOR FUTURE',
                category: 'NGO\'S',
            },


        ]},

    mostPopular: {
        title: 'MOST POPULAR',
        data: [

            {
                id: 0,
                img: require('../src/Opportuinities/assets/img6.png'),
                title: 'FUTURE MAKERSPACE',
                category: 'YOUTH',

            },


            {
                id: 1,
                img: require('../src/Opportuinities/assets/img4.png'),
                title: 'PARK RECONSTRUCTION',
                category: 'ENVIROMENT',
            },


        ]},

    selectedCategory: null,
    underCategory: null,



};

const reducer = (state = initialState, action) => {

    switch(action.type){

        case SELECT_CATEGORY:
            return {
                ...state, selectedCategory: action.payload,
            };
        case SELECT_UNDER_CATEGORY:
            return {
                ...state, underCategory: action.payload,
            };



        default: return initialState;

    }

};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

const SELECT_CATEGORY = 'SELECT_CATEGORY';

const selectCategory = (categoryId) => {
    return {
        type: SELECT_CATEGORY,
        payload: categoryId
    }
};

const SELECT_UNDER_CATEGORY = 'SELECT_UNDER_CATEGORY';

const selectUnderCategory = (underCat) => {
    return {
        type: SELECT_UNDER_CATEGORY,
        payload: underCat
    }
};

export {

    selectCategory,
    selectUnderCategory

};
