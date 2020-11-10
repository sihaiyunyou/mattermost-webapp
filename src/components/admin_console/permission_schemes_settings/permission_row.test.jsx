// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import PermissionRow from 'src/components/admin_console/permission_schemes_settings/permission_row.jsx';

describe('components/admin_console/permission_schemes_settings/permission_row', () => {
    const defaultProps = {
        id: 'id',
        uniqId: 'uniqId',
        inherited: null,
        readOnly: false,
        value: 'checked',
        selectRow: jest.fn(),
        onChange: jest.fn(),
    };

    test('should match snapshot on editable and not inherited', () => {
        const wrapper = shallow(
            <PermissionRow {...defaultProps}/>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot on editable and inherited', () => {
        const wrapper = shallow(
            <PermissionRow
                {...defaultProps}
                inherited={{name: 'test', displayName: 'Test'}}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot on read only and not inherited', () => {
        const wrapper = shallow(
            <PermissionRow
                {...defaultProps}
                readOnly={true}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot on read only and not inherited', () => {
        const wrapper = shallow(
            <PermissionRow
                {...defaultProps}
                readOnly={true}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should call onChange function on click', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <PermissionRow
                {...defaultProps}
                onChange={onChange}
            />,
        );
        wrapper.find('div').first().simulate('click');
        expect(onChange).toBeCalledWith('id');
    });

    test('shouldn\'t call onChange function on click when is read-only', () => {
        const onChange = jest.fn();
        const wrapper = shallow(
            <PermissionRow
                {...defaultProps}
                readOnly={true}
                onChange={onChange}
            />,
        );
        wrapper.find('div').first().simulate('click');
        expect(onChange).not.toBeCalled();
    });
});
