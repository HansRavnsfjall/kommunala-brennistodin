/* eslint-disable no-case-declarations */
/**
 * Change the collection of Contexts into a simplified array of data
 * @param contexts This is a map of the collected contexts from umb-debug
 * @returns An array of simplified context data
 */
export function contextData(contexts) {
    const contextData = new Array();
    for (const [alias, instance] of contexts) {
        const data = contextItemData(instance);
        contextData.push({ alias: alias, type: typeof instance, data });
    }
    return contextData;
}
/**
 * Used to find the methods and properties of a context
 * @param contextInstance The instance of the context
 * @returns A simplied object contain the properties and methods of the context
 */
function contextItemData(contextInstance) {
    let contextItemData = { type: 'unknown' };
    if (typeof contextInstance === 'function') {
        contextItemData = { ...contextItemData, type: 'function' };
    }
    else if (typeof contextInstance === 'object') {
        contextItemData = { ...contextItemData, type: 'object' };
        const methodNames = getClassMethodNames(contextInstance);
        if (methodNames.length) {
            contextItemData = { ...contextItemData, methods: methodNames };
            const props = [];
            for (const key in contextInstance) {
                if (key.startsWith('_')) {
                    continue;
                }
                const value = contextInstance[key];
                const valueType = typeof value;
                switch (valueType) {
                    case 'string':
                    case 'boolean':
                    case 'number':
                        props.push({ key: key, value: value, type: typeof value });
                        break;
                    case 'object':
                        // Check if the object is an observable (by checking if it has a subscribe method/function)
                        const isSubscribeLike = value && 'subscribe' in value && typeof value['subscribe'] === 'function';
                        const isWebComponent = value instanceof HTMLElement;
                        let valueToDisplay = 'Complex Object';
                        if (isWebComponent) {
                            const tagName = value.tagName.toLowerCase();
                            valueToDisplay = `Web Component <${tagName}>`;
                        }
                        else if (isSubscribeLike) {
                            valueToDisplay = 'Observable';
                        }
                        props.push({ key: key, type: typeof value, value: valueToDisplay });
                        break;
                    default:
                        props.push({ key: key, type: typeof value });
                        break;
                }
            }
            contextItemData = { ...contextItemData, properties: props.sort((a, b) => a.key.localeCompare(b.key)) };
        }
    }
    else {
        contextItemData = { ...contextItemData, type: 'primitive', value: contextInstance };
    }
    return contextItemData;
}
/**
 * Gets a list of methods from a class
 * @param class The class to get the methods from
 * @param klass
 * @returns An array of method names as strings
 */
function getClassMethodNames(klass) {
    const isGetter = (x, name) => !!(Object.getOwnPropertyDescriptor(x, name) || {}).get;
    const isFunction = (x, name) => typeof x[name] === 'function';
    const deepFunctions = (x) => x !== Object.prototype &&
        Object.getOwnPropertyNames(x)
            .filter((name) => isGetter(x, name) || isFunction(x, name))
            .concat(deepFunctions(Object.getPrototypeOf(x)) || []);
    const distinctDeepFunctions = (klass) => Array.from(new Set(deepFunctions(klass)));
    const allMethods = typeof klass.prototype === 'undefined' ? distinctDeepFunctions(klass) : Object.getOwnPropertyNames(klass.prototype);
    return allMethods.filter((name) => name !== 'constructor' && !name.startsWith('_')).sort();
}
