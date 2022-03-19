
export default () => ({
    isLoading: true,
    entries: [
        {
            id:     new Date().getTime(),
            date:   new Date().toDateString(),
            text:   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam impedit rerum porro repudiandae est et perferendis autem iste sunt, modi aspernatur neque aut quam facilis laborum odit explicabo, amet sequi?',
            picture: null
        },
        {
            id:     new Date().getTime() + 1000,
            date:   new Date().toDateString(),
            text:   'Nullam aliquam tincidunt lorem a vehicula. Donec vel nulla imperdiet, accumsan nisl rhoncus, tempor massa. Aliquam urna orci, porta vel consectetur a, vulputate venenatis erat',
            picture: null
        },
        {
            id:     new Date().getTime() + 1500,
            date:   new Date().toDateString(),
            text:   'Vestibulum non lorem ac enim tincidunt tincidunt. Etiam vel convallis eros, eget dignissim tellus. Praesent placerat rhoncus vulputate. In imperdiet ligula sed pellentesque vehicula.',
            picture: null
        }
    ]
})