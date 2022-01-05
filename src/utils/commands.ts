import {ChainablePromiseElement, ChainablePromiseArray, ElementArray} from 'webdriverio/build/types'
/**
 * Function for getting single element: checbkox, radio, and so on
 * @param elements
 * @param value
 */
export const selectSingleElement = async(elements: ChainablePromiseArray<ElementArray>, value: string) => {
    const element = await elements;
    for (let i = 0; i < element.length; i++) {
        const elementValue = await (element[i].getAttribute('value'));
        if (elementValue === value) {
            await (element[i]).click();
            break;
        }
    }
}

/**
 *  Select one or more than one elements
 * @param elements
 * @param values
 */
export const selectMultiElements = async(elements: ChainablePromiseArray<ElementArray>, values: string) => {
    const element = await elements;
    const checkValues = values.split(',');
    for (let i = 0; i < element.length; i++) {
        const elementValue = await (element[i].getAttribute('value'));
        if (checkValues.includes(elementValue)) {
            await (element[i]).click();
        }
    }
}

export const setText = async (element:  ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    await (await element).setValue(text);
}

export const selectVisibleText = async(element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    await (await element).selectByVisibleText(text);
}

export const click = async(elem: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await (await elem).click();
}

export const findHeaderWithText = async (headerType: string, text: string): Promise<ElementArray> => {
    return $$(`${headerType}=${text}`);
}