import { useState, useEffect } from 'react';

export function useVisibleSection(sectionIds: string[]): string | null {
    const [visibleSectionId, setVisibleSectionId] = useState<string | null>(null);

    useEffect(() => {
        // Configure the observer with a 50% threshold
        const observerOptions = {
            threshold: 0.5, // Trigger when 50% of the element is visible
            rootMargin: '0px' // No margin around the viewport
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            // Filter for elements that are more than 50% visible
            const visibleEntries = entries.filter(entry => entry.isIntersecting);

            if (visibleEntries.length > 0) {
                // If multiple elements are visible, take the one with the highest intersection ratio
                const mostVisible = visibleEntries.reduce((prev, current) =>
                    current.intersectionRatio > prev.intersectionRatio ? current : prev
                );

                setVisibleSectionId(mostVisible.target.id);
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [sectionIds]);

    return visibleSectionId;
}