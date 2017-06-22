/**
 * Created by mothw on 6/22/2017.
 */

function BasicCard(front,back)
    {
        this.front = front;
        this.back = back;
        this.type = 'basic';
        return this;
    }

    exports.BasicCard = BasicCard;