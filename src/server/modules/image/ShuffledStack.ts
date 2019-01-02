export class ShuffledStack<T>
{
    private items: {
        [key: string] : {
            usage: number;
            value: T
        }
    } = {};

    public getNext()
    {
        var keys = Object.keys(this.items)
            .sort((a, b) => this.items[a].usage - this.items[b].usage);

        if (!keys.length)
        {
            return null;
        }

        var item = this.items[keys[0]];
        item.usage++;
        return item.value;
    }

    public add(
        item: T,
        keySelector: (item: T) => string)
    {
        var key = keySelector(item);
        if (!this.items[key])
        {
            this.items[key] = {
                usage: 0,
                value: item
            }
        }

        this.items[key].value = item;
    }

    public addRange(
        items: T[],
        keySelector: (item: T) => string)
    {
        for(let i = 0; i < items.length; i++)
        {
            this.add(items[i], keySelector);
        }
    }
}
