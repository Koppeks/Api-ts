import { DataTypes } from "sequelize";

module.exports = (sequelize: {
  define: (
    arg0: string,
    arg1: {
      id: {
        type: DataTypes.IntegerDataTypeConstructor;
        primaryKey: boolean;
        autoIncrement: boolean;
      };
      nickname: {
        type: DataTypes.StringDataTypeConstructor;
        allownull: boolean;
        defaultValue: string;
      };
      email: {
        type: DataTypes.StringDataTypeConstructor;
        allowNull: boolean;
        validate: { isEmail: boolean; isUnique: true };
      };
      verifiedEmail: {
        type: DataTypes.AbstractDataTypeConstructor;
        default: boolean;
      };
      password: {
        type: DataTypes.StringDataTypeConstructor;
        allowNull: boolean;
      };
      role: {
        type: DataTypes.StringDataTypeConstructor;
        allowNull: boolean;
        defaultValue: string;
      };
      avatar: {
        type: DataTypes.StringDataTypeConstructor;
        defaultValue: string;
      };
    },
    arg2: {
      timestamps: boolean;
      createdAt: string;
      updatedAt: string;
      paranoid: boolean;
    }
  ) => void;
  validateIsUnique: (arg0: string) => any;
}) => {
  sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nickname: {
        type: DataTypes.STRING,
        allownull: false,
        defaultValue: "user",
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          isUnique: sequelize.validateIsUnique("email"),
        },
      },
      verifiedEmail: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Client",
      },
      avatar: {
        type: DataTypes.STRING,
        defaultValue:
          "https://imgs.search.brave.com/mLwlFyvqROQioiFE-Je_jZz2ip5Kp2jtfcxP8JlU5EM/rs:fit:415:415:1/g:ce/aHR0cDovL3d3dy40/eDQuZWMvb3Zlcmxh/bmRlY3VhZG9yL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA2/L2RlZmF1bHQtdXNl/ci1pY29uLTguanBn",
      },
    },
    {
      timestamps: true,
      createdAt: "created_date",
      updatedAt: "updated_at",
      paranoid: true,
    }
  );
};
