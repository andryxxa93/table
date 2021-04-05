import React, { useEffect, useState } from 'react';
import './App.css';
import Modal from './Components/Modal/Modal';
import Overlay from './Components/Overlay/Overlay';
import Table from './Components/Table/Table';

function App() {

    const [data, setData] = useState([])
    const [selectedItem, setSelectedItem] = useState(null)
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)
    const [topModal, setTopModal] = useState(0)

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setData(json))
    }

    useEffect(() => {
        getData()
    }, [data])

    const visibleHandler = (e) => {
        if (e.target.tagName !== 'INPUT') {
            setOverlayVisible(prev => !prev)
            setModalVisible(prev => !prev)
            const elementTopPosition = e.target.parentNode.className.includes('row')
                ? e.target.parentNode.getBoundingClientRect().y
                : e.target.getBoundingClientRect().y
            const scrollTop = document.documentElement.scrollTop;
            const elementHeight = +window.getComputedStyle(e.target).height.replace('px', '');
            const paddingValue = 20;
            setTopModal(elementTopPosition + scrollTop + elementHeight + paddingValue);
        }
    }

    const onSelect = (id) => {
        const item = data.find(object => object.id === id);
        setSelectedItem(item);
    }

    return (
        <div className="App">
            <Modal selectedItem={selectedItem} top={topModal} visible={modalVisible}/>
            <Overlay onCustomClick={visibleHandler} visible={overlayVisible}/>
            <Table onSelect={onSelect} data={data} onCustomClick={visibleHandler}/>
        </div>
    );
}

export default App;
