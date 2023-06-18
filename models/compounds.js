module.exports=(sequelize,DataTypes)=>{
    const compounds1s=sequelize.define('compounds1s',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          }
        ,compoundName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        compoundDescription:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        imgSource:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        imgAttribution:{
            type:DataTypes.STRING,
        },
        dateModified:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        
    },{timestamps:false})
    return compounds1s;
}