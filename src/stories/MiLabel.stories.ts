import { MyLabel } from '../components/MyLabel';
import { Meta, StoryObj } from '@storybook/react';

const meta={//informacion de la pagina que vamos a tener

 title: 'UI/labels/Mylabel',// se define el titulo
 component:MyLabel,// se define el componente
 parameters: {
    layout:'centered',//css para que cente el componete 
 },
 argTypes:{
    size:{
        control:'inline-radio',//
    }
 }

}satisfies Meta<typeof MyLabel>//infiera la informacion que el componente tenga

export default meta; //exportacion por defecto

type Story=StoryObj<typeof meta>; // importamos el storyObjs

//definimos las historia

export const Basic:Story={
    args: {
        label: 'Basic label',
        allcaps: true || false,
    }

}

export const Secondary:Story={
    args:{
        label: 'Secondary label',
        allcaps: true || false,
    }
}
export const CustomColors:Story={
    args:{
        label: 'Custom colors',
        allcaps: true || false,
    }
}