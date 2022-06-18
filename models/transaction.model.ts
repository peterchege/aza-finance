import { Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";

export interface ITransaction {
    id: number;
    emailAddress: string;
    inputAmount: number;
    inputAmountCurrency: string;
    outputAmount: number;
    outputCurrency: string;


}

@Table({
    tableName: "transactions",
    timestamps: true,
    paranoid: true,

})
export class Transaction extends Model<ITransaction> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    emailAddress!: string;

    @Column({
        type: DataType.FLOAT(10, 2),
        allowNull: false,
    })
    inputAmount!: number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    inputAmountCurrency!: string;

    @Column({
        type: DataType.FLOAT(10, 2),
        allowNull: false,
    })
    outputAmount!: number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    outputAmountCurrency!: string;

}