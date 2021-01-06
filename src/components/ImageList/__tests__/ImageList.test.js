
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { createWaitForElement } from 'enzyme-wait';
import { Provider } from 'react-redux';
import moxios from 'moxios';

import Store from '../../../store';
import {ImageList} from '../ImageList';
import data from '../../../store/data';

describe('ImageList', () => {
    let useEffect;
    let component;
    let fetchProducts = jest.fn();
    let sortType = jest.fn();
    let searchText = jest.fn();
    let props = {
        isLoading: false,
        images: [],
        fetchProducts,
        sortType,
        searchText
    }

    beforeEach(() => {
        useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());
        component = shallow(<Store><ImageList /></Store>)
    });

    it('renders properly', () => {
        expect(shallowToJson(component)).toMatchSnapshot();
    });
});

describe('ImageList', () => {
    let component, waitForListItem;

    beforeEach(() => {
        moxios.install();
        moxios.stubRequest('https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json', {
            status: 200,
            response: data,
        });

        component = mount(<Store><ImageList /></Store>)
        waitForListItem = createWaitForElement('.card');
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it("must render a loading span before api call success", () => {
        expect(component.find("span.spinner").exists()).toBeTruthy();
    });

    it('shows list items after some time', async done => {
        const componentReady = await waitForListItem(component);
        expect(componentReady.find('.card')).toHaveLength(data.length);
        done();
    })

});