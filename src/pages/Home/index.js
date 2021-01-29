import ClubBox from '../../components/ui/ClubBox';
import ProductList from '../../components/ui/ProductList';

const productsPageOne = [
    {
        name: 'Camisa River Plate 2020/2021',
        price: 130.90,
        image: 'http://mlb-s2-p.mlstatic.com/771210-MLB44741650666_012021-O.jpg',
        id: 'MLB1780978790'
    },
    {
        name: 'Camisa Ajax 2020/2021',
        price: 130.90,
        image: 'http://mlb-s1-p.mlstatic.com/740859-MLB44741749909_012021-O.jpg',
        id: 'MLB1780964509'
    },
    {
        name: 'Camisa Corinthians 2020/2021',
        price: 130.90,
        image: 'images/9f92e9c7.jpg',
        id: 'MLB1780964509'
    },
    {
        name: 'Camisa Boca Juniors 2020/2021',
        price: 130.90,
        image: 'images/adf3f6ca.jpg',
        id: 'MLB1780964509'
    },
    {
        name: 'Camisa Leeds United 2020/2021',
        price: 130.90,
        image: 'images/1884867b.jpg',
        id: 'MLB1780964509'
    },
    {
        name: 'Camisa Juventus 2020/2021',
        price: 130.90,
        image: 'images/5476683a.jpg',
        id: 'MLB1780964509'
    },
];

const productsPageTwo = [
    {
        name: 'Camisa Lyon 2020/2021',
        price: 130.90,
        image: 'images/81ce5954.jpg',
        id: 'MLB1780964509'
    },
    {
        name: 'Camisa Barcelona 2020/2021',
        price: 130.90,
        image: 'images/4e25e79f.jpg',
        id: 'MLB1780964509'
    },
    {
        name: 'Camisa Chelsea 2020/2021',
        price: 130.90,
        image: 'images/07d6ca40.jpg',
        id: 'MLB1780964509'
    },
    {
        name: 'Camisa Borrusia Dortmund 2020/2021',
        price: 130.90,
        image: 'images/52bc3edf.jpg',
        id: 'MLB1780964509'
    },
    {
        name: 'Camisa Borrusia Dortmund 2020/2021',
        price: 130.90,
        image: 'images/3f0c9368.jpg',
        id: 'MLB1780964509'
    },
    {
        name: 'Camisa França 2020/2021',
        price: 160.90,
        image: 'images/eba2b363.jpg',
        id: 'MLB1780964509'
    },
]


function Home() {
    return (
        <div className="Home">
            <div className="container">
                <ProductList items={productsPageOne} limit={6} />
            </div>

            <div className="fluid-container mb-5">
                <ClubBox />
            </div>

            <div className="container">
                <ProductList items={productsPageTwo} limit={6} />
            </div>

        </div>
    )
}

export default Home