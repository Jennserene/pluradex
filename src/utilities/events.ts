export const subscribe = (eventName: string, listener: EventListenerOrEventListenerObject): void => {
    document.addEventListener(eventName, listener);
}

export const unsubscribe = (eventName: string, listener: EventListenerOrEventListenerObject): void => {
    document.removeEventListener(eventName, listener);
}

export const publish = (eventName: string, data: any): void => {
    const event: CustomEvent = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
}