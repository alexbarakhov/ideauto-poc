import Button from '../components/Button'


export default {
    title: "Components/Button",
    component: Button,
    argTypes: { onClick: {action: "onClick action:"}}
}

const Template = args => <Button {...args}/>

export const Green = Template.bind({})
Green.args = {
    backgroundColor: "lightgreen",
}

export const Large = Template.bind({})
Large.args = {
    size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
    label: "Long-ass label name right here my dude",
}
