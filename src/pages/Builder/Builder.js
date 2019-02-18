import React, { Component } from 'react';
import AddFormItem from '../../components/AddFormItem/AddFormItem';
import FormBlockContainer from '../../components/FormBlockContainer/FormBlockContainer';

class Builder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Title',
            description: 'Description'
        };
    }

    render() {
        return (
            <div className="container w-50">
                <FormBlockContainer
                    formBlocks={this.props.formBlocks}
                    addFormBlockOption={this.props.addFormBlockOption}
                    deleteOption={this.props.deleteOption}
                    moveOptionUp={this.props.moveOptionUp}
                    moveOptionDown={this.props.moveOptionDown}
                />
                <AddFormItem addFormBlock={this.props.addFormBlock} />
            </div>
        );
    }
}

export default Builder;
